const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let currentScreen = "start";
let btnsStart = document.querySelectorAll(".btn");
let scoreBlock = document.getElementById("score");
let currentTime = Date.now();

let score = 0;

const screens = {
    start: document.querySelector('.start'),
    game: document.querySelector('.game'),
    end: document.querySelector('.end')
}

function changeScreen (screen) {
    const wrapperScreen = document.querySelector('.screens').childNodes
    wrapperScreen.forEach(element => {
        if (element instanceof HTMLElement){
            element.style.display = "none"
        }
    });
    screen.style.display = "block"
}

btnsStart.forEach(btn => {
    btn.addEventListener('click', function(){
        changeScreen(screens.game)
        score = 0;
        scoreBlock.innerHTML = 0;
    })
});

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout(function() {
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let CactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (CactusLeft < 50 && CactusLeft > 0 && dinoTop >= 140) {
        changeScreen(screens.end);
    } else { 
        if (Date.now() - 1000 > currentTime) {
            currentTime += 1000
            score++;
            scoreBlock.innerHTML = score;
        }
    }
}, 10)
