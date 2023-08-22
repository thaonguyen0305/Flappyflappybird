let background = new Background(0, 0, 200, 300);
let bird = new Bird(50, 150, 30, 30);
let arrPipe = [];
let isGameOver = false;

let minHeight = 70;
let maxHeight = 130;

//hàm sinh ra một chiều cao ngẫu nhiên cho các ống nước trong khoảng minHeight và maxHeight
function getRandomHeight(minHeight, maxHeight) {
    return Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
}

for (let i = 0; i < 50; i++) {
    let pipe1Height = getRandomHeight(minHeight, maxHeight);
    let pipe2Height = getRandomHeight(minHeight, maxHeight);

    let pipe1 = new Pipe(500 + i * (30 + 50), 0, 30, pipe1Height,  "./anh/abovepipe.jpg");
    arrPipe.push(pipe1);

    let pipe2 = new Pipe(500 + i * (30 + 50), 300 - pipe2Height, 30, pipe2Height, "./anh/belowpipe.jpg");
    arrPipe.push(pipe2);
}

function drawArrPipe() {
    arrPipe.forEach(pipe => {
        pipe.drawPipe();
        pipe.movePipe();
    });
}

class Game {
    constructor() {
        this.status = "start";
        this.score = 0;
        this.bird = new Bird(50, 150, 30, 30);
    }

    start() {
        background.drawBackground();
        bird.moveBird();
        drawArrPipe();
    }

    gameover(arrPipe) {
        if (bird.collision(arrPipe) == "gameover") {
            isGameOver = true;
            alert("Game Over!");
        }
    }    
    showScore() {
        this.score++;
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");
        ctx.font = "bold 16px Sans-serif";
        ctx.fillStyle = "rgba(255, 255, 0, 1)";
        ctx.fillText("Flapping times: " + this.score, 10, 80);
        if (this.score == 2000) {
            alert("Score: " + this.score + "You win");
        }
    }

}

let game = new Game();

function init() {
    game.start();
    game.gameover(arrPipe);
    game.showScore();
    if (!isGameOver) {
        requestAnimationFrame(init);
    }
}

init()

document.addEventListener('keydown', (event) => {
    if (event.key === " ") {
        bird.flap();
    }
});