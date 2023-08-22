class Pipe {
    constructor(pipeX, pipeY, pipeW, pipeH, image) {
        this.pipeX = pipeX;
        this.pipeY = pipeY;
        this.pipeW = pipeW;
        this.pipeH = pipeH;

        this.speedX = 1;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.image = image;
    }

    drawPipe() {
        let pipeImage = new Image();
        pipeImage.src = this.image;
        pipeImage.onload = () => {
            this.ctx.drawImage(
                pipeImage, this.pipeX, this.pipeY, this.pipeW, this.pipeH);
        };
    }

    movePipe() {
        this.pipeX -= this.speedX;
        this.drawPipe();
    }
}