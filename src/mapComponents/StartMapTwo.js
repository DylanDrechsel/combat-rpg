import React from 'react';

const StartMapTwo = () => {
    let context = null;
    let count = 300;
    const tileWidth = 32
    const tileHeight = 32
    const mapWidth = 30
    const mapHeight = 30

    let currentSecond = 0, frameCount = 0, framesLastSecond = 0
    let lastFrameTime = 0

    const keysDown = {
        37: false,
        38: false,
        39: false,
        40: false
    }

    

    class Character {
        tileForm = [1, 1]
        tileTo = [1, 1]
        timeMoved = 0
        dimension = [32, 32];
        position = [45, 45]
        delayMove = 700;

        plactAt(x, y) {
            this.tileFrom = [x, y]
            this.tileTo = [x, y]
            this.position = [((tileWidth * x) + ((tileWidth - this.dimension[0]) / 2)), ((tileHeight * y) + ((tileHeight - this.dimension[1]) / 2))]
        }

        processmovement(t) {

        }
    }

    
    
    const player = new Character();

    let gameMap = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
    0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 1, 0, 1, 0, 0, 0, 1, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 0, 1, 0,
    0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
    0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]

    let stoneRoad = new Image();
	stoneRoad.src = 'https://i.ibb.co/3hJc3Fg/road-Fixed.png';

    let water = new Image();
	water.src = 'https://i.ibb.co/0hnbwN1/water.png';

    
    window.onload = () => {
        context = document.getElementById('game').getContext('2d');
        requestAnimationFrame(drawGame);
        context.font = "bold 10pt sans-serif"
    }

    const drawGame = () => {
        console.log(count)
        
        if (context === null || count < 1) { return; }

        const sec = Math.floor(Date.now()/1000);
        let stonePath = context.createPattern(stoneRoad, 'repeat');
        let waterPath = context.createPattern(water, 'repeat');
        
        if (sec != currentSecond) {
            currentSecond = sec;
            framesLastSecond = frameCount;
            frameCount = 1;
        } else {
            frameCount++
        }

        for (let y = 0; y < mapHeight; y++) {
            for (let x = 0; x < mapWidth; x++) {
                count--

                switch(gameMap[((y * mapWidth) +x)]) {
                    case 0:
                        context.fillStyle = waterPath
                        break;

                    default:
                        context.fillStyle = stonePath
                }

                context.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
        }

        context.fillStyle = "red"
        context.fillText("FPS: " + framesLastSecond, 10, 20)

        requestAnimationFrame(drawGame);
    }

 
    return (
			<div>
				<canvas id='game' width='10000' height='10000'></canvas>
			</div>
		);
};

export default StartMapTwo;