// game.js

import { generateRandomWord, createGameOver, generatePlayBtn, playAction } from './utils.js';

let gameOver = false;
let word = generateRandomWord();
const container = document.querySelector(".container");
const message = document.getElementById("message");
let i = 0, j = 0;

function createButtons() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            let button = document.createElement("button");
            button.style.width = "50px";
        button.style.height = "50px";
        button.style.fontSize = "19px";
        button.style.margin = "5px";
            button.setAttribute("id", "" + i + "" + j);
            container.append(button);
        }
        const breakElement = document.createElement("br");
        container.append(breakElement);
    }
}

createButtons();
