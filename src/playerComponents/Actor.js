import React from 'react';
import Sprite from "./Sprite"

const Actor = ({ sprite, data, step = 0, dir = 0, position = { x: 0, y: 0}}) => {
    const { height, width } = data

    return (
		<div>
		    <Sprite
				image={sprite}
				position={position}
				data={{
				x: step * width,
				y: dir * height,
				width,
				height
				}}
			/>
		</div>
	);
};

export default Actor;