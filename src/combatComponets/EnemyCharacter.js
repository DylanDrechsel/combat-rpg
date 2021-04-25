import React, { useState, useEffect } from 'react';
import Image from '../assests/e1Single.png'
import '../App.css'

const EnemyCharacter = ({ player, enemy, attack }) => {
	const [inAttackRange, setInAttackRange] = useState(false);
	
	const handleAttack = () => {
		if (
			(enemy.currentTile == player.currentTile[0] - 1 &&
				enemy.actionPoints > 0) ||
			(enemy.currentTile == player.currentTile[0] + 1 &&
				enemy.actionPoints > 0) ||
			(enemy.currentTile == player.currentTile[0] - 10 &&
				enemy.actionPoints > 0) ||
			(enemy.currentTile == player.currentTile[0] + 10 &&
				enemy.actionPoints > 0)
		) {
			attack(player.attacks);
		}
	}

	useEffect(() => {
		if (player.canMoveTo.includes(enemy.currentTile[0])) {
			setInAttackRange(true);
		} else {
			setInAttackRange(false);
		}
	}, [player.canMoveTo])

    return (
			<div onClick={handleAttack} className={inAttackRange ? 'attackTile' : 'tile'}>
				<div
					style={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${Image})`,
						backgroundRepeat: 'no-repeat',
					}}></div>
			</div>
		);
};

export default EnemyCharacter;