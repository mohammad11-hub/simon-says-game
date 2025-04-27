let GAmeSequence = [];
let UserSequence = [];

let Color = ["red", "blue", "green", "yellow"];

let level = 0;
let started = false;
highscore=1;
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started");
        started = true;

        LevelUp();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}


function LevelUp() {
    UserSequence = []; 
    level++;
    if(level >= highscore){
        highscore = level;
    }
    let h2 = document.querySelector("h2");
    h2.innerText = `level=${level}`;

    let randind = Math.floor(Math.random() * 3);
    let randColor = Color[randind];
    let randBtn = document.querySelector(`.${randColor}`);
    GAmeSequence.push(randColor);
    console.log(GAmeSequence);

    btnflash(randBtn);
}

function Answer(idx) {
    // console.log(level);

    if (UserSequence[idx] === GAmeSequence[idx]) {
        if (UserSequence.length == GAmeSequence.length) {
            // LevelUp();
            setTimeout(LevelUp, 1000);
            // console.log("Correct");
        }

    } else {
        let h2 = document.querySelector("h2");
        let h3 = document.querySelector("h3");

        h2.innerText = `GAME OVER, Press Any Key to Restart,
        Your Score is ${level}`;
        h3.innerHTML =`Highest Score =  ${highscore}`;

        document.body.classList.add("body");
        setTimeout(function () {
            document.body.classList.remove("body");
        },250);

        Reset();

    }
}



function BtnPress() {
    // console.log(this);
    let Userclick = this;
    btnflash(Userclick);

    let UserColor = Userclick.getAttribute("id");
    UserSequence.push(UserColor);
    // console.log(UserSequence);

    Answer(UserSequence.length - 1);
}

let btn = document.querySelectorAll(".btn");
for (btns of btn) {
    btns.addEventListener("click", BtnPress);

}

function Reset(){
    started = false;
    GAmeSequence = [];
    UserSequence = [];
    level = 0;
}