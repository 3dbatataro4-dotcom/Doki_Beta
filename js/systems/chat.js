window.ChatSystem = {
    gameInstance: null,

    init: function(game) {
        this.gameInstance = game;
    },

    renderChat: function(data, saveToHistory = true) {
        // 處理選項
        if (data.type === "choice") {
            this.gameInstance.showChatChoices(data.options);
            return;
        }

        // 切換到 SNS 層
        document.getElementById("ui-layer").classList.add("hidden");
        document.getElementById("char-layer").classList.add("hidden");
        document.getElementById("sns-layer").classList.remove("hidden");
        document.getElementById("sns-layer").classList.add("active");

        const chatBody = document.getElementById("chat-body");
        const msgDiv = document.createElement("div");
        
        if (data.id === "sys") {
            // 系統訊息樣式優化
            msgDiv.className = "chat-msg system";
            msgDiv.innerHTML = `<div class="chat-system-text">${data.text}</div>`;
        } else {
            // 一般對話
            let avatarUrl = window.ASSETS.avatar[data.id] || window.ASSETS.avatar.player;
            // 名字中文化
            const nameMap = { peter: "彼得", lanlan: "蘭蘭", ora: "奧拉", sys: "系統" };
            let name = data.id === "self" ? this.gameInstance.state.name : (nameMap[data.id] || data.id);
            let msgClass = data.id === "self" ? "self" : "other";

            msgDiv.className = `chat-msg ${msgClass}`;
            msgDiv.innerHTML = `
                ${data.id !== 'self' ? `<div class="chat-avatar" style="background-image:url('${avatarUrl}')"></div>` : ''}
                <div>
                    ${data.id !== 'self' ? `<div class="chat-name">${name}</div>` : ''}
                    <div class="chat-bubble">
                        ${data.text}
                        ${data.image ? `<img src="${data.image}" class="chat-image">` : ''}
                    </div>
                </div>
            `;
        }
        
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;

        // 存入歷史紀錄
        if (saveToHistory) {
            const target = this.gameInstance.state.currentChatTarget;
            // 如果是在自由模式或第一天晚上的群組聊天，都保存
            if (this.gameInstance.state.freeChatMode || this.gameInstance.state.currentSceneId === 'day1_night_chat') {
                if (target && this.gameInstance.state.chatHistory[target]) {
                    this.gameInstance.state.chatHistory[target].push(data);
                }
            }
        }

        return msgDiv;
    },

    switchSnsTab: function(tab) {
        const chatBody = document.getElementById("chat-body");
        const momentsFeed = document.getElementById("moments-feed");
        const tabs = document.querySelectorAll(".sns-tab");
        const contactList = document.getElementById("contact-list");
        
        if (tab === 'chat') {
            if (this.gameInstance.state.currentChatTarget) chatBody.style.display = "flex";
            momentsFeed.classList.remove("active");
            if (!this.gameInstance.state.currentChatTarget) contactList.classList.add("active");
            tabs[0].classList.add("active");
            tabs[1].classList.remove("active");
        } else {
            chatBody.style.display = "none";
            momentsFeed.classList.add("active");
            tabs[0].classList.remove("active");
            tabs[1].classList.add("active");
            contactList.classList.remove("active");
            this.renderMoments();
        }
    },

    renderMoments: function() {
        const feed = document.getElementById("moments-feed");
        if (feed.innerHTML !== "") return; // 避免重複渲染
        
        if (!window.MOMENTS || !Array.isArray(window.MOMENTS)) {
            console.error("MOMENTS data missing or invalid");
            return;
        }

        try {
            // 根據路線插入特殊動態
            const specialPosts = [
                { route: "lynn", postId: "m_peter_special", id: "peter", content: "終於找到了。我的藥。我的貓。全世界最乾淨的存在。 #FoundYou #MyCat" },
                { route: "jornona", postId: "m_lanlan_special", id: "lanlan", content: "老婆回來了呀！！！開心到想把學校燒了助興！🔥🔥🔥 #Love #Wife" },
                { route: "melas", postId: "m_ora_special", id: "ora", content: "變量回歸。實驗重啟。這一次，數據會很有趣。" }
            ];

            specialPosts.forEach(sp => {
                if (this.gameInstance.state.route === sp.route) {
                    if (!window.MOMENTS.find(m => m.postId === sp.postId)) {
                        window.MOMENTS.unshift({ 
                            postId: sp.postId, 
                            id: sp.id, 
                            name: (sp.id === 'peter' ? '彼得' : sp.id === 'lanlan' ? '蘭蘭' : '奧拉'), 
                            avatar: sp.id, 
                            content: sp.content, 
                            time: "剛剛" 
                        });
                    }
                }
            });

            window.MOMENTS.forEach(post => {
                const div = document.createElement("div");
                div.className = "moment-post";
                
                let avatarUrl = "";
                if (window.ASSETS && window.ASSETS.avatar && window.ASSETS.avatar[post.id]) {
                    avatarUrl = window.ASSETS.avatar[post.id];
                } else {
                    avatarUrl = window.ASSETS?.avatar?.player || "";
                }

                div.innerHTML = `
                    <div class="moment-header">
                        <div class="moment-avatar" style="background-image:url('${avatarUrl}')"></div>
                        <div>
                            <div class="moment-name">${post.name}</div>
                            <div class="moment-time">${post.time}</div>
                        </div>
                    </div>
                    <div class="moment-content">${post.content}</div>
                    ${post.img ? `<img src="${post.img}" class="moment-img">` : ''}
                    <div class="moment-actions">
                        <div class="moment-like">♥ 讚</div>
                        <div style="font-size:0.8em;">💬</div>
                        <input type="text" class="moment-comment-input" placeholder="寫下留言...">
                        <div class="moment-send-btn">➤</div>
                    </div>
                    <div class="moment-comments" id="comments-${post.postId}"></div>
                `;
                
                // Bind events manually to avoid string eval issues
                const likeBtn = div.querySelector('.moment-like');
                likeBtn.onclick = function() {
                    this.classList.toggle('liked');
                    const se = document.getElementById('se-click');
                    if(se) se.play();
                };

                const input = div.querySelector('.moment-comment-input');
                const sendBtn = div.querySelector('.moment-send-btn');
                
                const sendComment = () => {
                    window.Game.postComment(input, post.id, post.postId);
                };

                input.onkeydown = (e) => {
                    if (e.key === 'Enter') sendComment();
                };
                sendBtn.onclick = sendComment;

                feed.appendChild(div);
                
                // 載入已保存的留言
                if (this.gameInstance.state.momentsComments) {
                    const savedComments = this.gameInstance.state.momentsComments[post.postId] || [];
                    const commentsDiv = div.querySelector(`#comments-${post.postId}`);
                    if (savedComments.length > 0) commentsDiv.classList.add("active");
                    
                    savedComments.forEach(c => {
                        const cDiv = document.createElement("div");
                        cDiv.className = "moment-comment";
                        cDiv.innerHTML = c.html;
                        commentsDiv.appendChild(cDiv);
                    });
                }
            });
            
            const btnDiv = document.createElement("div");
            btnDiv.className = "choice-btn";
            btnDiv.style.textAlign = "center";
            btnDiv.style.marginTop = "10px";
            btnDiv.innerText = "發布動態";
            btnDiv.onclick = () => alert('功能開發中');
            feed.appendChild(btnDiv);

        } catch (e) {
            console.error("Error rendering moments:", e);
            const errDiv = document.createElement("div");
            errDiv.style.color = "red";
            errDiv.style.padding = "20px";
            errDiv.innerText = "載入朋友圈失敗: " + e.message;
            feed.appendChild(errDiv);
        }
    },

    initContactList: function() {
        const list = document.getElementById("contact-list");
        list.innerHTML = "";
        
        const contacts = [
            { id: 'group', name: '身心靈自助研究社', avatar: 'https://file.garden/aWe99vhwaGcNwkok/DOKIDOKI/ICON', last: '點擊進入群組聊天' },
            { id: 'peter', name: '彼得', avatar: window.ASSETS.avatar.peter, last: '...' },
            { id: 'lanlan', name: '蘭蘭', avatar: window.ASSETS.avatar.lanlan, last: '...' },
            { id: 'ora', name: '奧拉', avatar: window.ASSETS.avatar.ora, last: '...' }
        ];

        contacts.forEach(c => {
            const item = document.createElement("div");
            item.className = "contact-item";
            item.innerHTML = `
                <div class="contact-avatar" style="background-image:url('${c.avatar}')"></div>
                <div class="contact-info">
                    <div class="contact-name">${c.name}</div>
                    <div class="contact-last-msg">${c.last}</div>
                </div>
            `;
            item.onclick = () => this.openChat(c.id, c.name);
            list.appendChild(item);
        });
        
        // 默認顯示群組或當前聊天對象
        if (this.gameInstance.state.currentChatTarget) {
            const nameMap = { 
                'group': '身心靈自助研究社', 
                'peter': '彼得', 
                'lanlan': '蘭蘭', 
                'ora': '奧拉' 
            };
            const targetName = nameMap[this.gameInstance.state.currentChatTarget] || this.gameInstance.state.currentChatTarget;
            this.openChat(this.gameInstance.state.currentChatTarget, targetName);
        } else {
            this.showContactList();
        }
        
        // 清空並重新渲染朋友圈，確保狀態正確
        document.getElementById("moments-feed").innerHTML = "";
    },

    showContactList: function() {
        document.getElementById("chat-body").style.display = "none";
        document.getElementById("contact-list").classList.add("active");
        document.getElementById("chat-back-btn").style.display = "none";
        document.getElementById("chat-title").innerText = "聊天列表";
        document.getElementById("chat-title-icon").style.display = "none";
        document.getElementById("suggestion-container").classList.remove("active");
        this.gameInstance.state.currentChatTarget = null;
    },

    openChat: function(target, name) {
        this.gameInstance.state.currentChatTarget = target;
        document.getElementById("contact-list").classList.remove("active");
        document.getElementById("chat-body").style.display = "flex";
        document.getElementById("chat-body").innerHTML = ""; // 清空當前顯示
        document.getElementById("chat-back-btn").style.display = "block";
        document.getElementById("chat-title").innerText = name;
        document.getElementById("chat-title-icon").style.display = "flex";

        // 顯示輸入框
        const footer = document.querySelector('.chat-footer');
        if (footer) footer.style.display = 'flex';
        
        // 載入歷史訊息
        const history = this.gameInstance.state.chatHistory[target] || [];
        if (target === 'group' && history.length === 0) {
             // 已經在 loadScene 處理過，或還沒開始
        } else {
            history.forEach(msg => {
                const el = this.renderChat(msg, false);
                el.style.animation = "none";
                el.style.opacity = 1;
            });
        }

        // 顯示推薦回覆
        if (target !== 'group') {
            window.AI.getSuggestions(target, this.gameInstance.state.route, (suggestions) => {
                this.renderSuggestions(suggestions);
            });
        } else {
            document.getElementById("suggestion-container").classList.remove("active");
        }
    },

    sendChat: function() {
        const input = document.getElementById("chat-input-real");
        const text = input.value.trim();
        if (!text) return;
        
        input.value = "";
        const target = this.gameInstance.state.currentChatTarget;
        this.renderChat({ type: "chat", id: "self", text: text });
        
        const history = this.gameInstance.state.chatHistory[target] || [];

        if (target === 'group') {
            // 群組聊天：三個人同時回覆
            const chars = ['peter', 'lanlan', 'ora'];
            chars.forEach((charId, index) => {
                setTimeout(() => {
                    const affection = this.gameInstance.state.affection[charId] || 0;
                    window.AI.chat(text, this.gameInstance.state.route, charId, affection, history, (reply, score) => {
                        this.renderChat({ type: "chat", id: charId, text: reply });
                        if (score !== 0) this.gameInstance.updateAffection(charId, score);
                    });
                }, 1000 + (index * 1500) + Math.random() * 1000);
            });
        } else {
            this.gameInstance.state.dailyMsgCount[target]++;
            const affection = this.gameInstance.state.affection[target] || 0;

            window.AI.chat(text, this.gameInstance.state.route, target, affection, history, (reply, score) => {
                this.renderChat({ type: "chat", id: target, text: reply });
                if (score !== 0) this.gameInstance.updateAffection(target, score);
            });
        }
    },

    sendSuggestion: function(text) {
        document.getElementById("chat-input-real").value = text;
        this.sendChat();
    },

    renderSuggestions: function(list) {
        const container = document.getElementById("suggestion-container");
        container.innerHTML = "";
        if (list && list.length > 0) {
            container.classList.add("active");
            list.forEach(text => {
                const chip = document.createElement("div");
                chip.className = "suggestion-chip";
                chip.innerText = text;
                chip.onclick = () => this.sendSuggestion(text);
                container.appendChild(chip);
            });
        } else {
            container.classList.remove("active");
        }
    },

    postComment: function(inputElem, charId, postId) {
        const text = inputElem.value.trim();
        if (!text) return;
        
        inputElem.value = "";
        
        if (!this.gameInstance.state.momentsComments[postId]) this.gameInstance.state.momentsComments[postId] = [];

        const commentsDiv = document.getElementById(`comments-${postId}`);
        commentsDiv.classList.add("active");
        
        const pComment = document.createElement("div");
        pComment.className = "moment-comment";
        const pHtml = `<span>${this.gameInstance.state.name}:</span> ${text}`;
        pComment.innerHTML = pHtml;
        commentsDiv.appendChild(pComment);
        
        this.gameInstance.state.momentsComments[postId].push({ html: pHtml });
        
        const context = [{ type: "chat", id: "self", text: `(在朋友圈評論了: ${text})` }];
        const affection = this.gameInstance.state.affection[charId] || 0;
        
        window.AI.chat(`(回覆朋友圈留言: ${text})`, this.gameInstance.state.route, charId, affection, context, (reply, score) => {
            const cComment = document.createElement("div");
            cComment.className = "moment-comment";
            const nameMap = { peter: "彼得", lanlan: "蘭蘭", ora: "奧拉" };
            const cHtml = `<span style="color:${window.COLORS[charId]}">${nameMap[charId]}:</span> ${reply}`;
            cComment.innerHTML = cHtml;
            commentsDiv.appendChild(cComment);
            
            this.gameInstance.state.momentsComments[postId].push({ html: cHtml });

            if (score !== 0) this.gameInstance.updateAffection(charId, score);
        });
    }
};