import React from 'react';

const StartMapTwo = () => {
    let context = null;
    let count = 300;
    const tileWidth = 32
    const tileHeight = 32
    const mapWidth = 38
    const mapHeight = 19

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
    5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 3, 2, 2, 7, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 5, 5, 5, 5, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 8, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]

    const grass = new Image();
    grass.src = 'https://i.ibb.co/SsCxN77/grass.png';

    const stoneRoad = new Image();
    stoneRoad.src = 'https://i.ibb.co/1Gx7ct1/stoneroad.png';

    const stoneMossRoad = new Image();
	stoneMossRoad.src = 'https://i.ibb.co/VLc9vgq/moss-Rock32px.png';

    const halfMossHalfWaterNorth = new Image();
    halfMossHalfWaterNorth.src =
			'https://i.ibb.co/Hpfsc7Q/halfstonehalfwater-north.png';

    const halfMossHalfStoneEast = new Image();
		halfMossHalfStoneEast.src =
			'https://i.ibb.co/XjGy7ty/halfstonehalfwater-east.png';

    const water = new Image();
	water.src = 'https://i.ibb.co/0hnbwN1/water.png';

    const rightAngleRockWater = new Image();
    rightAngleRockWater.src = 'https://i.ibb.co/WprdZYm/rightanglerockwater.png';

    const rightAngleRockWaterTwo = new Image();
    rightAngleRockWaterTwo.src =
			'https://i.ibb.co/R0jC94h/rightanglerockwatertwo.png';

    const halfRockHalfGrassSouth = new Image();
		halfRockHalfGrassSouth.src =
			'https://i.ibb.co/vqcshQD/halfstonehalfrock.png';

    

    
    window.onload = () => {
        context = document.getElementById('game').getContext('2d');
        requestAnimationFrame(drawGame);
        context.font = "bold 10pt sans-serif"
    }
    

    const drawGame = () => {
        console.log(count)
        
        if (context === null || count < 1) { return; }

        const sec = Math.floor(Date.now()/1000);
        const iWater = context.createPattern(water, 'repeat');
        const iStoneMossRoad = context.createPattern(stoneMossRoad, 'repeat');
        const iStoneRoad = context.createPattern(stoneRoad, 'repeat')
        const iHalfMossHalfWaterNorth = context.createPattern(halfMossHalfWaterNorth, 'repeat')
        const iRightAngleRockWater = context.createPattern(rightAngleRockWater, 'repeat');
        const iHalfRockHalfGrassSouth = context.createPattern(halfRockHalfGrassSouth, 'repeat')
        const iHalfMossHalfStoneEast = context.createPattern(halfMossHalfStoneEast, 'repeat')
        const irightAngleRockWaterTwo = context.createPattern(rightAngleRockWaterTwo, 'repeat')
        const igrass = context.createPattern(grass, 'repeat')
        
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
                        context.fillStyle = iWater
                        break;

                    case 1:
                        context.fillStyle = iStoneMossRoad
                        break;

                    case 2:
                        context.fillStyle = iHalfMossHalfWaterNorth
                        break;

                    case 3:
                        context.fillStyle = iRightAngleRockWater
                        break;

                    case 4:
                        context.fillStyle = iHalfMossHalfStoneEast;
                        break;

                    case 5:
                        context.fillStyle = iStoneRoad
                        break;

                    case 6:
                        context.fillStyle = iHalfRockHalfGrassSouth;
                        break;

                    case 7:
                        context.fillStyle = irightAngleRockWaterTwo
                        break;

                    case 8:
                        context.fillStyle = igrass
                        break;

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