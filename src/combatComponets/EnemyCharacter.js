import React from 'react';
import Image from '../assests/e1Single.png'

const EnemyCharacter = ({ player, enemy, attack }) => {
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

    return (
			<div onClick={handleAttack} className='tile'>
				<div
					style={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${Image})`,
						backgroundColor: 'tan',
						backgroundRepeat: 'no-repeat',
					}}></div>
			</div>
		);
};

export default EnemyCharacter;