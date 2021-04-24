import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { gameState as gameStateAtom } from '../App'

const UseWalk = () => {
	const [gameState, setGameState] = useRecoilState(gameStateAtom)
    const [dir, setDir] = useState(0);
    const [position, setPosition] = useState({
		x: 484,
		y: 174,
	});

	// COMBAT SET
	const [combatZone, setCombatZone] = useState(true)

	const directions = {
		down: 0,
		left: 1,
		right: 2,
		up: 3,
	};

	const stepSize = 2;

	const modifier = {
		down: { x: 0, y: stepSize },
		left: { x: -stepSize, y: 0 },
		right: { x: stepSize, y: 0 },
		up: { x: 0, y: -stepSize },
	};

	const walk = (dir) => {
		setDir((prev) => {
			if (directions[dir] === prev) move(dir);
			return directions[dir];
		});
	};

	const move = (dir) => {
		setPosition((prev) => ({
			x: prev.x + modifier[dir].x,
			y: prev.y + modifier[dir].y,
		}));
	};

	const combatChance = () => {
		const chance = (Math.floor(Math.random() * 100) + 1 / 2)
		if (chance / 2 <= 1) setGameState('combat')
	}

	
	useEffect(() => {
		if (combatZone === true) {
			combatChance();
		}
	}, [position])

    return {
        walk, dir, position
    }
};

export default UseWalk;