# Gemini Context: Paper School Game Project

This project is a single-file HTML5 game titled **"Paper School: Echoes of the Absent" (紙校：虛妄的迴響)**. It is a psychological horror Otome game with meta-game elements, designed for mobile (vertical) play.

## Project Overview

*   **Title:** 紙校：虛妄的迴響 (Paper School: Echoes of the Absent)
*   **Genre:** Otome / Psychological Horror / Meta Game
*   **Platform:** Web (HTML5), optimized for Mobile Vertical view.
*   **Core Concept:** A dating sim where the love interests are mentally unstable due to the loss of their previous partners. The game deconstructs itself ("glitches") in the second week unless the player inputs a specific name ("White Moonlight" mechanic) to trigger a sweet romance route.

## Directory Structure & Key Files

*   **`PAPER.html`**: The complete game implementation. It contains the HTML structure, CSS styling, and JavaScript logic (game loop, state management, UI handling). This is the primary file for code development.
*   **`遊戲企劃書：《紙校：虛妄的迴響》.md` (Game Design Document)**: The source of truth for game mechanics, story progression, and AI/scripting logic. It details:
    *   **Daily Cycle:** Morning Class -> Break Chat -> Lunch Date -> Club Activity -> After School -> Night (SNS).
    *   **Routes:** Normal/Horror (default) vs. White Moonlight (triggered by player name).
    *   **Character Logic:** Specific behaviors for Peter, Lanlan, and Ora in both normal and "glitched" states.
*   **`非常重要的人物資料表 (1).md` (Character Bible)**: Detailed profiles for all characters, including those not main love interests. It contains:
    *   Personality keywords, appearance descriptions, and specific dialogue tics (e.g., Lanlan's "呀", Peter's "Shit").
    *   Relationship charts and "White Moonlight" pairs (Peter/Lynn, Lanlan/Jornona, Ora/Melas).
    *   **Paro Settings:** Alternate universe settings (Modern, High School) useful for expanding the narrative.

## Development & Usage

### Running the Game
Since this is a static HTML game:
1.  Open `PAPER.html` in any modern web browser.
2.  For the best experience during development, use the browser's "Responsive Design Mode" (F12 DevTools) and set the resolution to a mobile device (e.g., iPhone 12/14 Pro or generic 375x812).

### Editing & Contribution
*   **Codebase:** The project follows a "Single File Component" approach where HTML, CSS, and JS reside in `PAPER.html`.
    *   **CSS:** Located in the `<style>` block. Uses CSS variables for character theming (e.g., `--peter-color`).
    *   **Logic:** Javascript handles the game state (Day/Week cycles), visual novel dialogue system, and asset loading.
*   **Assets:** Game assets (images, background music, sound effects) are currently hosted externally (e.g., `file.garden`) and linked directly in the code/GDD.
*   **AI/Scripting:** When generating dialogue or events, strictly adhere to the **Character Bible** for personality consistency and the **GDD** for plot triggers.

### Key Mechanics to Watch
1.  **Name Detection:** The game **must** check the player's input name at the start.
    *   `Lynn` / `林恩` -> Triggers Peter's Sweet Route.
    *   `Jornona` / `喬諾娜` -> Triggers Lanlan's Sweet Route.
    *   `Melas` / `蜜拉思` -> Triggers Ora's Sweet Route.
2.  **Sanity/Glitch System:** In the default route, Week 2 introduces visual glitches (Zalgo text), audio distortions, and UI tampering (e.g., Ora preventing choices).

## Characters (Quick Reference)

| Character | Role | Key Trait | White Moonlight | Glitch Behavior |
| :--- | :--- | :--- | :--- | :--- |
| **Peter** | Student Council Pres. | Obsessive, "Shit", superstitious | **Lynn** | Drinks "Holy Water" (cleaner), hallucinations. |
| **Lanlan** | Rich Transfer Student | Dragon, Amoral, Pyromaniac | **Jornona** | Sets fire to things, beast eyes, lacks empathy. |
| **Ora** | Club President | High IQ, Petty, Meta-aware | **Melas** | Manipulates game UI, loops time, "observes" player. |
