import React from 'react';
import "../App.css"

const Tile = ({number, playerMove}) => {
    const handlePlayerMove = () => {
		  playerMove(number);
  	};

        return (
			<div
				className='tile'
				onClick={playerMove ? handlePlayerMove : null}
				className={playerMove ? 'playerMove' : 'tile'}>
			</div>
		);
};

export default Tile;