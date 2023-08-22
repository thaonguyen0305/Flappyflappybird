class Background {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    drawBackground() {
        let image = new Image();
        image.src = "./anh/background.jpg";
        image.onload = () => {
            this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
        }
    }
}

