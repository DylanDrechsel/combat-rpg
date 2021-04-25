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

    let gameMap = [
    5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 3, 2, 2, 7, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 5, 5, 5, 5, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 9, 11, 11, 10, 1, 1, 1, 9, 10, 1, 1, 1, 9, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 0, 0, 6, 6, 6, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 0, 0, 8, 8, 8, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 8, 8, 8, 8, 8, 0, 0, 8, 8, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 0, 0, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 0, 8, 8, 0, 8, 8, 8, 8, 8, 8, 6, 6, 6, 6, 5, 5, 5, 5, 5, 4, 0, 0, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 0, 8, 8, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 5, 5, 4, 0, 7, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 4, 0, 0, 8, 8, 0, 0, 0, 0, 8, 8, 8, 8, 8, 0, 0, 0, 0, 12, 5, 5, 4, 5, 5, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 3, 2, 5, 8, 8, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 12, 5, 5, 4, 10, 5, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 5, 5, 5, 8, 8, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 0, 0, 0, 12, 5, 5, 4, 0, 10, 5, 5, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 5, 5, 5, 5, 5, 8, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 12, 5, 5, 4, 0, 0, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    11, 11, 11, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 5, 5, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 0, 0, 0, 0, 0,
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

    const rightAngleRockWaterThree = new Image();
    rightAngleRockWaterThree.src = 'https://i.ibb.co/d43pP5W/right-Angle2.png';

    const rightAngleRockWaterFour = new Image();
    rightAngleRockWaterFour.src = 'https://i.ibb.co/cN1hGRv/right-Angle4.png';

    const halfRockHalfGrassSouth = new Image();
		halfRockHalfGrassSouth.src =
			'https://i.ibb.co/vqcshQD/halfstonehalfrock.png';

    const halfRockHalfWaterSouth = new Image();
    halfRockHalfWaterSouth.src =
			'https://i.ibb.co/LStLHSW/Webp-net-resizeimage-1.png';

    const halfRockHalfWaterEast = new Image();
    halfRockHalfWaterEast.src =
			'https://i.ibb.co/qM8xzhy/Webp-net-resizeimage-2.png';

    

    useEffect(() => {
        setTimeout(() => {
            context = document.getElementById('game').getContext('2d');
            requestAnimationFrame(drawGame);
            context.font = 'bold 10pt sans-serif';
        }, '100')
    }, [])

    const drawGame = () => {        
        if (context === null || count < 1) { return; }

        const iWater = context.createPattern(water, 'repeat');
        const iStoneMossRoad = context.createPattern(stoneMossRoad, 'repeat');
        const iStoneRoad = context.createPattern(stoneRoad, 'repeat')
        const iHalfMossHalfWaterNorth = context.createPattern(halfMossHalfWaterNorth, 'repeat')
        const iRightAngleRockWater = context.createPattern(rightAngleRockWater, 'repeat');
        const iHalfRockHalfGrassSouth = context.createPattern(halfRockHalfGrassSouth, 'repeat')
        const iHalfMossHalfStoneEast = context.createPattern(halfMossHalfStoneEast, 'repeat')
        const irightAngleRockWaterTwo = context.createPattern(rightAngleRockWaterTwo, 'repeat')
        const igrass = context.createPattern(grass, 'repeat')
        const irightAngleRockWaterThree = context.createPattern(rightAngleRockWaterThree, 'repeat')
        const irightAngleRockWaterFour = context.createPattern(rightAngleRockWaterFour, 'repeat')
        const iHalfRockHalfWaterSouth = context.createPattern(halfRockHalfWaterSouth, 'repeat')
        const iHalfRockHalfWaterEast = context.createPattern(halfRockHalfWaterEast, 'repeat')

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

                    case 9:
                        context.fillStyle = irightAngleRockWaterThree;
                        break;

                    case 10:
                        context.fillStyle = irightAngleRockWaterFour;
                        break;

                    case 11:
                        context.fillStyle = iHalfRockHalfWaterSouth;
                        break;

                    case 12:
                        context.fillStyle = iHalfRockHalfWaterEast;
                        break;

                }

                context.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
            }
        }

        requestAnimationFrame(drawGame);
    }

 
    return (
			<div
				onMouseEnter={play}
				style={{ height: '100vh', width: '100vh' }}>
				<canvas id='game' width='1000' height='1000' />
			</div>
		);
};

export default StartMapTwo;