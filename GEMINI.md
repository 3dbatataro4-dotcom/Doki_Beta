# Gemini Context: Paper School Game Project (PaperSchool_Game_good)

This project is a web-based HTML5 game titled **"Paper School: Echoes of the Absent" (紙校：虛妄的迴響)**. It is a psychological horror Otome game with meta-game elements, optimized for mobile vertical play.

## Project Overview

*   **Title:** 紙校：虛妄的迴響 (Paper School: Echoes of the Absent)
*   **Genre:** Otome / Psychological Horror / Meta Game
*   **Platform:** Web (HTML5), Mobile Vertical optimization.
*   **Core Concept:** A dating sim where love interests are mentally unstable. The game features a "White Moonlight" mechanic where specific player names trigger hidden sweet routes, preventing the default horror/glitch progression in Week 2.

## Directory Structure & Architecture

The project follows a modular JavaScript architecture, separating core logic, game data, and system implementations.

### Root Directory
*   **`index.html`**: The main entry point. Contains the HTML structure for game layers (Background, UI, Characters, Minigames) and loads all necessary scripts.
*   **`css/style.css`**: Global styling, using CSS variables for character theming and UI layout.
*   **`遊戲企劃書：《紙校：虛妄的迴響》.md` (GDD)**: The master design document detailing mechanics, plot, and character behaviors.
*   **`非常重要的人物資料表 (1).md`**: Character bible with detailed personality profiles and dialogue guidelines.

### JavaScript (`js/`)
*   **`main.js`**: Application entry point. Initializes the game instance.
*   **`core/`**
    *   **`game.js`**: The central game engine. Handles the game loop, state management (Day/Week, Affection), save/load system, and UI transitions.
*   **`systems/`**
    *   **`ai.js`**: Handles logic for character behavior and responses.
    *   **`chat.js`**: Manages the SNS/Messaging system (simulating a chat app).
    *   **`minigame.js`**: Implements the "Mind Puzzle" minigame logic.
*   **`scripts/`**
    *   **`day1.js`, `day2.js`, `day3.js`**: specific script files containing the dialogue and event data for each day.
*   **`data/`**
    *   **`assets.js`**: Central registry for game assets (images, audio).

## Key Mechanics

1.  **Name Detection (White Moonlight):**
    *   Inputting specific names at the start alters the game route entirely.
    *   `Lynn` / `林恩` -> **Peter's** Sweet Route.
    *   `Jornona` / `喬諾娜` -> **Lanlan's** Sweet Route.
    *   `Melas` / `蜜拉思` -> **Ora's** Sweet Route.
2.  **Sanity & Glitch System:**
    *   **Week 1:** Normal dating sim experience.
    *   **Week 2 (Glitch):** In the default route, visual glitches (Zalgo text), audio distortions, and UI tampering occur as characters' mental states deteriorate.
3.  **Daily Cycle:**
    *   Morning Class -> Break Chat -> Lunch Date -> Club Activity (Minigame) -> After School -> Night (SNS).

## Characters

| Character | Role | Key Trait | White Moonlight | Glitch Behavior |
| :--- | :--- | :--- | :--- | :--- |
| **Peter** | Student Council Pres. | Obsessive, "Shit", Superstitious | **Lynn** | Drinks "Holy Water" (cleaner), hallucinations, Zalgo text. |
| **Lanlan** | Rich Student (Dragon) | Amoral, Pyromaniac, "Ya" | **Jornona** | Sets fire to things, beast eyes, lacks empathy. |
| **Ora** | Club President | High IQ, Petty, Meta-aware | **Melas** | Manipulates game UI/Time, "observes" player, cold logic. |

## Development Guidelines

*   **Running:** Open `index.html` in a browser. Use "Responsive Design Mode" (Mobile view) for the intended experience.
*   **Assets:** Most assets (images, audio) are hosted externally (e.g., `file.garden`). Ensure internet connectivity for them to load.
*   **Scripting:** When modifying `dayX.js` or `ai.js`, strictly adhere to the character personalities defined in the GDD and Character Bible.
*   **Conventions:**
    *   Use `Game.functionName()` for core operations.
    *   Maintain the modular structure; do not put all logic in one file.
    *   CSS classes like `.layer` control screen visibility.
