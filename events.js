// events.js

import { checkWord, createGameOver } from './utils.js';
import { generateRandomWord } from './utils.js'; // Import here if needed
let gameOver = false;
let word = generateRandomWord();
const container = document.querySelector(".container");
const message = document.getElementById("message");

let i = 0, j = 0;

addEventListener("keydown", (event) => {
    console.log(event.keyCode);
    console.log(event.key);
    if (!gameOver) {
        if (i < 6 && (event.keyCode > 64 && event.keyCode < 91) || (event.keyCode == 8)) {
            const key = event.key.toLowerCase(); // This is the key that is pressed.
            let btn = document.getElementById("" + i + "" + j);
            if (key == "backspace" && j == 0) {
                return;
            } else if (key == "backspace" && j != 0) {
                j--;
                btn = document.getElementById("" + i + "" + j);
                btn.innerText = '';
                return;
            }

            btn.innerText = key;

            if (j < 4) {
                j++;
            } else {
                console.log(word);
                let won = checkWord(i, word);
                if (won) {
                    createGameOver(i, j);
                    i = -1;
                    j = 0;
                    message.innerHTML = "You won, the word is <span>" + word + "</span>";
                }
                if (i == 5 && j == 4 && !won) {
                    createGameOver(i, j);
                    i = -1;
                    j = 0;
                    message.innerHTML = "You lost, the word is <span>" + word + "</span>";
                }
                
                i++;
                j = 0;
            }
        }
    }
});
