import React from 'react';

const Start = ({ startGame, number, didStart }) => {
    const handleClick = () => {
		console.log(number)
		startGame(number);
	};

	// console.log(number)
	// console.log(didStart)

    return (
			<div onClick={didStart ? null : handleClick} className={didStart ? 'tile' : 'start'} style={{background: "red"}}>
				{number}
			</div>
		);
};

export default Start;