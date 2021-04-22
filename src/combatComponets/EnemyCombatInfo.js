import React from 'react';
import DragHandler from '../img/drag-handle.png';
import UseDraggable from '../hooks/UseDraggable';

const EnemyCombatInfo = ({ playerInfo, enemyInfo }) => {
	const { position } = UseDraggable('handle');

	if (position.x === 0) {
		position.x = 1675;
		position.y = 200;
	}

	return (
		<div>
			<div
				style={{
					position: 'absolute',
					border: '1px solid black',
					top: position.y,
					left: position.x,
					zIndex: 100,
					width: 200,
					height: 500,
					backgroundColor: 'tan',
				}}>
				<img id='handle' src={DragHandler} />
				<p>Enemy Health: {enemyInfo.health}</p>
				<p>Enemy Action Points: {enemyInfo.actionPoints}</p>
			</div>
		</div>
	);
};

export default EnemyCombatInfo;