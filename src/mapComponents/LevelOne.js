import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import AudioFile from '../assests/music/RpgMap-Death.mp3'


const StartMapTwo = () => {
    let context = null;
    let count = 300;
    const tileWidth = 32
    const tileHeight = 32
    const mapWidth = 38
    const mapHeight = 19
    const [playbackRate, setPlaybackRate] = useState(1);
	const [play, { stop }] = useSound(AudioFile, {
		volume: 0.15,
		playbackRate,
		interrupt: true,
	});

    // let currentSecond = 0, frameCount = 0, framesLastSecond = 0

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
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1,
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

    

    useEffect(() => {
        setTimeout(() => {
            context = document.getElementById('game').getContext('2d');
            requestAnimationFrame(drawGame);
            context.font = 'bold 10pt sans-serif';
        }, '100')
    }, [])

    const drawGame = () => {        
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
        
        // if (sec != currentSecond) {
        //     currentSecond = sec;
        //     framesLastSecond = frameCount;
        //     frameCount = 1;
        // } else {
        //     frameCount++
        // }

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

        // context.fillStyle = "red"
        // context.fillText("FPS: " + framesLastSecond, 10, 20)

        requestAnimationFrame(drawGame);
    }

 
    return (
			<div
				onMouseEnter={play}
				style={{ /* 'margin-top': '10vh' */ height: '100vh', width: '100vh' }}>
				<canvas id='game' width='1000' height='1000' />
			</div>
		);
};

export default StartMapTwo;