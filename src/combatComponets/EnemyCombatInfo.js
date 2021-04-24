import React from 'react';
import DragHandler from '../img/drag-handle.png';
import UseDraggable from '../hooks/UseDraggable';

const EnemyCombatInfo = ({ enemyInfo }) => {
	// const { position } = UseDraggable('enemyInformation');

	// if (position.x === 0) {
	// 	position.x = 1675;
	// 	position.y = 200;
	// }

	return (
		<div>
			<div
				style={{
					position: 'absolute',
					border: '1px solid black',
					top: 200,
					left: 1675,
					zIndex: 100,
					width: 200,
					height: 500,
					backgroundColor: 'tan',
				}}>
				<img id='enemyInformation' src={DragHandler} />
				<p>Enemy Health: {enemyInfo.health}</p>
				<p>Enemy Action Points: {enemyInfo.actionPoints}</p>
				<p>
					Attacks <br />
					{enemyInfo.attacks[0].name} --
					{enemyInfo.attacks[0].damage} damage <br />
					{enemyInfo.attacks[1].name} --
					{enemyInfo.attacks[1].damage} damage
				</p>
			</div>
		</div>
	);
};

export default EnemyCombatInfo;