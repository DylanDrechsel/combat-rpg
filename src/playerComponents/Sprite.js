import '../App.css';
import React, { useEffect, useState } from 'react';

const Sprite = ({ image, data, position }) => {
	const { y, width, height } = data;
	const [x, setX] = useState(0);

	useEffect(() => {
		x <= 32 ? setX(x + 32) : setX(x - 64);
	}, [position.x, position.y]);

	// Top invisable wall
	if (position.y < 160 && position.y > 140 && position.x && position.x > 470 && position.x < 1460 ) {
		position.y = 160
	}

	// Bottom invisable wall
	if (position.y >= 746 && position.x > 470 && position.x < 1460) {
		position.y = 746
	}

	// Left invisable wall
	if (position.y > 156 && position.y <= 752 && position.x < 474) {
		position.x = 476;
	}

	// Right invisable wall
	if (
		position.x <= 1460 &&
		position.x > 1454
	) {
		position.x = 1454;
	}

	
	console.log(position.x, position.y);

	return (
		<div
			className='Sprite'
			style={{
				position: 'absolute',
				top: position.y,
				left: position.x,
				height: `${height}px`,
				width: `${width}px`,
				backgroundImage: `url(${image})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: `-${x}px  -${y}px`,
			}}></div>
	);
};

export default Sprite;
