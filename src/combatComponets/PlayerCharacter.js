import React from 'react';
import image from '../assests/m1Single.png'

const PlayerCharacter = ({ number, startGame, didStart }) => {
    // const handleClick = () => {
	// 	console.log(number)
	// 	startGame(number);
	// };

    return (
			<div
				// onClick={didStart ? null : handleClick}
				style={{
					width: 32,
					height: 32,
					backgroundImage: `url(${image})`,
					backgroundColor: 'tan',
					backgroundRepeat: 'no-repeat',
				}}></div>
		);
};

export default PlayerCharacter;