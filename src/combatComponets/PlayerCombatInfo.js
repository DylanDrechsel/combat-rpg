import React from 'react';
import DragHandler from '../img/drag-handle.png';
import UseDraggable from '../hooks/UseDraggable';

const PlayerCombatInfo = ({ playerInfo }) => {
    const {position} = UseDraggable("handle")

	if (position.x === 0 && position.y === 0) {
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
					<img id='handle' src={DragHandler} /> <b>
					<h1>Player</h1>
					<p>Health: {playerInfo.health}</p>
					<p>Action Points: {playerInfo.actionPoints}</p>
					<p>
						Attacks <br />
						{playerInfo.attacks[0].name} -- 
						{playerInfo.attacks[0].damage} damage
					</p></b>
				</div>
			</div>
		);
};

export default PlayerCombatInfo;