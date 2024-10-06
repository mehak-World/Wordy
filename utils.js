let gameOver = false;
let word = generateRandomWord();
const container = document.querySelector(".container");
const message = document.getElementById("message");


export function generateRandomWord() {
    const words = ["heart", "plant", "stand", "chair", "ghost", "crate", "brown", "light", "drink", "fruit"];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

export function checkWord(i, word) {
    const requiredBtns = [];
    const btns = document.querySelectorAll("button");
    btns.forEach((btn) => {
        if (btn.id.startsWith(i)) {
            requiredBtns.push(btn);
        }
    });

    requiredBtns.forEach((btn) => {
        const text = btn.innerText;
        const index = word.indexOf(text);
        const position = btn.id.charAt(1);
        if (word.includes(text) && index == position) {
            btn.style.backgroundColor = "lightgreen";
        } else if (word.includes(text)) {
            btn.style.backgroundColor = "grey";
        } else {
            btn.style.backgroundColor = "red";
        }
    });

    let won = true;
    requiredBtns.forEach((btn) => {
        if (btn.style.backgroundColor !== "lightgreen") {
            won = false;
        }
    });

    return won;
}

export function createGameOver(i, j) {
    const btns = document.querySelectorAll("button");
    gameOver = true;
    generatePlayBtn(i, j);
    btns.forEach((btn) => {
        btn.disabled = true;
    });
}

export function generatePlayBtn(i, j) {
    let indexes;
    let playbtn = document.createElement("button");
    playbtn.setAttribute("id", "play");
    playbtn.innerText = "Play Again";
    container.append(playbtn);
    playbtn.addEventListener("click", () => {playAction(i,j) } );
}

export function playAction(i, j) {
    window.location.reload();
    console.log("play btn triggered");
    gameOver = false;
    const btns = document.querySelectorAll("button");
    btns.forEach((btn) => {
        btn.disabled = false;
        btn.innerText = '';
        btn.style.backgroundColor = "white";
    });
    word = generateRandomWord();
    console.log(this);
    let play = document.getElementById("play");
    container.removeChild(play);
    message.innerText = "Let's Play";
    
}
