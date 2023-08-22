class Bird {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedY = 2;
        this.gravity = 0.1;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    drawBird() {
        let image = new Image();
        image.src = "./anh/bird.png";
        image.onload = () => {
            this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
        }
    }

    moveBird() {
        this.ctx.clearRect(500, 0, 200, 200)
        this.speedY += this.gravity; //cập nhật tốc độ theo chiều dọc (y)
        this.y += this.speedY; // cập nhật vị trí theo chiều dọc (y)
        this.drawBird(); //cập nhật lại hình ảnh bird theo thay đổi của tốc độ và vị trí của nó
    }

    flap() {
        this.speedY = -2; // mô tả vỗ cánh
    }

    collision(arrPipe) {
        //Chim rơi xuống đất
        if(this.y > 300 || this.y < 0){
            return "gameover";
        }

        //Chim chạm các cột
        for (let i = 0; i < arrPipe.length; i += 2) {
            let abovePipe = arrPipe[i];
            let belowPipe = arrPipe[i + 1];
            
            if (this.x + this.width > abovePipe.pipeX && this.x < abovePipe.pipeX + abovePipe.pipeW &&
                (this.y < abovePipe.pipeH || this.y + this.height > belowPipe.pipeY)) {
                return "gameover";
            } 
    
            /*if (this.x > abovePipe.pipeX + abovePipe.pipeW && this.x <= arrPipe[i + 2].pipeX) {
                this.score++; // Tăng điểm khi chim qua mỗi cặp ống
                this.drawScore(); // Vẽ lại điểm mới
            }*/
        }
    }
}