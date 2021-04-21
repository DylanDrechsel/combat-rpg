import React from 'react';
import "../App.css"

const Tile = ({number, move}) => {
    const handleClick = () => {
		move(number);
	};

    return (
        <div className="tile"
            onClick={move ? handleClick : null}
            className={move ? "selectable" : "tile"}
        >
            {number}
        </div>
			
		);
};

export default Tile;