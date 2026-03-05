// 主程式入口
// 加入全域錯誤處理
window.addEventListener('error', function(event) {
    console.error('Global Error:', event.error);
    alert('遊戲載入發生錯誤: ' + event.message);
});

document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log("DOM Loaded, Initializing Game...");
        if (typeof window.Game !== 'undefined' && window.Game.init) {
            window.Game.init();
            console.log("Paper School Game Initialized Successfully.");
        } else {
            throw new Error("Game object is not defined or missing init method. Check loading order.");
        }
    } catch (e) {
        console.error("Initialization Failed:", e);
        alert("遊戲初始化失敗: " + e.message);
    }
});
