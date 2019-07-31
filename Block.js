let brickwidth = 100;
let brickheight = 40;
let brickRow = 3;
let brickColumn = 6;

let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetlost = 51.5;
let brickX, brickY;

let bricks = [];
for (let i = 0; i < brickColumn; i++) {
    bricks[i] = [];
    for (let j = 0; j < brickRow; j++) {
        bricks[i][j] = { x: 0, y: 0 }

    }
};



function drawBricks() {
    for (let i = 0; i < brickColumn; i++) {
        for (let j = 0; j < brickRow; j++) {
            brickX = (i * (brickwidth + brickPadding) + brickOffsetlost);
            brickY = (j * (brickheight + brickPadding) + brickOffsetTop);
            bricks[i][j].x = 0;
            bricks[i][j].j = 0;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickwidth, brickheight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }

    }

}

function collisionTest() {
    for (let i = 0; i < brickColumn; i++) {
        for (let j = 0; j < brickRow; j++) {
            let b = bricks[i][j];
            if (ballY > b.y && ballY < b.y + brickheight) {
                dy -= dy;
            }
        }
    }
}















