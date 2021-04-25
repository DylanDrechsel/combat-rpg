import '../App.css';
import React, { useEffect, useState } from 'react';
import { gameState as gameStateAtom } from '../App';
import { useRecoilState } from 'recoil';

const Sprite = ({ image, data, position }) => {
	const [gameState, setGameState] = useRecoilState(gameStateAtom);
	const { y, width, height } = data;
	const [x, setX] = useState(0);

	useEffect(() => {
		x <= 32 ? setX(x + 32) : setX(x - 64);
	}, [position.x, position.y]);

	// Top invisible wall
	if (position.y < 160) {
		position.y = 160
	}

	// Bottom invisible wall
	if (position.y >= 746) {
		position.y = 746
	}

	// Left invisible wall
	if (position.x < 474) {
		position.x = 476;
	}

	// Right invisible wall
	if (position.x > 1458) {
		position.x = 1458;
	}

	if (position.y <= 718 && position.y >= 664 && position.x <= 1460 && position.x >= 1456) {
		setGameState('victory')
	}

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
