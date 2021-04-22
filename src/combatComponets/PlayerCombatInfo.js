import React from 'react';
import DragHandler from '../img/drag-handle.png';
import UseDraggable from '../hooks/UseDraggable';

const PlayerCombatInfo = ({ playerInfo, enemyInfo }) => {
    const {position} = UseDraggable("handle")

	if (position.x === 0) {
		position.x = 45
		position.y = 200
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
					<p>Player Health: {playerInfo.health}</p>
					<p>Player Action Points: {playerInfo.actionPoints}</p>
				</div>
			</div>
		);
};

export default PlayerCombatInfo;