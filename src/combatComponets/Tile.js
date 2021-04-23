import React from 'react';
import "../App.css"

const Tile = ({number, playerMove}) => {
    const handlePlayerMove = () => {
		playerMove(number);
	};
    
    let chance = Math.floor(Math.random() * 30)

    // if (chance) {
        return (
			<div
				className='tile'
				onClick={playerMove ? handlePlayerMove : null}
				className={playerMove ? 'playerMove' : 'tile'}>
				{/* {number} */}
			</div>
		);
    // } else {
    //     return (
    //         <div className="tile"
    //             onClick={() => alert('Invalid Move')}
    //             className={playerMove ? "playerMove" : "tile"}
    //             style={{ background: 'black'}}
    //         >
    //             {number}
    //         </div>             
    //         );
    // }
};

export default Tile;