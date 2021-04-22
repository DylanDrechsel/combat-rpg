import React from 'react';
import Sprite from '../assests/m1.png'

const Start = ({ startGame, number, didStart }) => {
    const handleClick = () => {
		console.log(number)
		startGame(number);
	};

	// console.log(number)
	// console.log(didStart)

    return (
			<div
				className='tile'
				onClick={didStart ? null : handleClick}
				className={didStart ? 'tile' : 'tile'}
				style={{ background: 'tan' }}>
				{/* <img src={Sprite}></img> */}
				{number}
			</div>
		);
};

export default Start;