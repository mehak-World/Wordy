let gameOver = false;
let word = generateRandomWord();
const container = document.querySelector(".container");
const message = document.getElementById("message");


for(let i = 0; i < 6; i++){
    for(let j = 0; j < 5; j++){
        let button = document.createElement("button");
        button.setAttribute("id", "" + i + "" + j);
        button.style.width = "50px";
        button.style.height = "50px";
        button.style.fontSize = "19px";
        button.style.margin = "5px";
        container.append(button);
    }
    const breakElement = document.createElement("br");
    container.append(breakElement);
}

let i = 0, j = 0;
addEventListener("keydown", (event) => {
    console.log(event.keyCode);
    console.log(event.key);
    if(!gameOver){
        if (i < 6 && (event.keyCode > 64 && event.keyCode < 91) || (event.keyCode == 8) ){
            const key = event.key.toLowerCase(); // This is the key that is pressed.
            let btn = document.getElementById("" + i + "" + j);
            if(key == "backspace" && j == 0){
                return
            }
            else if(key == "backspace" && j != 0){
                j--;
                btn = document.getElementById("" + i +"" + j);
                btn.innerText = '';
                return
            }
           
            btn.innerText = key;
            
            if(j < 4){
                j++;
            }
            else{
                
                console.log(word);
                let won = checkWord(i, word);
                if(won){
                    createGameOver();
                    message.innerHTML = "You won, the word is <span>" + word + "</span>";
                }
                if(i == 5 && j == 4 && !won){
                    createGameOver();
                    message.innerHTML = "You lost, the word is <span>" + word + "</span>";
                }
                i++;
                j = 0;
            }
            
        }
    }
})

function createGameOver(){
    const btns = document.querySelectorAll("button");
    gameOver = true;
    generatePlayBtn();
    btns.forEach((btn) => {
     btn.disabled = true;
    });
}

function checkWord(i, word){
    const requiredBtns = [];
    const btns = document.querySelectorAll("button");
    btns.forEach((btn) => {
        if(btn.id.startsWith(i)){
            requiredBtns.push(btn);
        }
    })

    requiredBtns.forEach((btn) => {
        const text = btn.innerText;
        const index = word.indexOf(text);
        const position = btn.id.charAt(1);
        if(word.includes(text) && index == position){
            btn.style.backgroundColor = "lightgreen";
        }
        else if(word.includes(text)){
            btn.style.backgroundColor = "yellow";
        }
        else{
            btn.style.backgroundColor = "red";
        }
    })

    let won = true;
    requiredBtns.forEach((btn) => {
        if(btn.style.backgroundColor !== "lightgreen"){
            won = false;
        }
    })
    
    return won;
}

function generateRandomWord(){
    const words = ["heart", "plant", "stand", "chair", "ghost", "crate", "brown", "light", "drink", "fruit"];
    const randomIndex = Math.floor(words.length*Math.random()) + 1;
    console.log(randomIndex);
    const word = words[randomIndex];
    return word;
}

function generatePlayBtn(){
    let playbtn = document.createElement("button");
    playbtn.setAttribute("id", "play");
    playbtn.innerText = "Play Again";
    container.append(playbtn);
    playbtn.addEventListener("click", playAction);
}

function playAction(){
    window.location.reload();
        console.log("play btn triggered");
        gameOver = false;
        const btns = document.querySelectorAll("button");
        btns.forEach((btn) => {
            btn.disabled =  false;
            btn.innerText = '';
            btn.style.backgroundColor = "white"
        }   
        )  
        i = 0, j = 0;
        word = generateRandomWord();
        console.log(this);
        this.style.display = "hidden";
        let play = document.getElementById("play");
        container.removeChild(play);
        message.innerText = "Let's Play";
}




