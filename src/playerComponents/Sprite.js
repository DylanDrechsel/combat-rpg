import '../App.css';
import React, { useEffect, useState } from 'react';

const Sprite = ({ image, data, position }) => {
	const { y, width, height } = data;
	const [x, setX] = useState(0);

	useEffect(() => {
		x <= 32 ? setX(x + 32) : setX(x - 64);
	}, [position.x, position.y]);

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
