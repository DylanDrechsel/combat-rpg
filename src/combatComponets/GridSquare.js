import React from 'react';

const GridSquare = () => {
    let color = ""
    
    let chance = Math.floor(Math.random() * 30)

    chance <= 2 ? color = "black" : color = "tan"

    return (
		<div style={{height: "120px", width: "120px", border: "5px solid", background: `${color}`}} />
		);
};

export default GridSquare;