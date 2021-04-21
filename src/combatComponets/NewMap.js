import React, { useState, useEffect } from 'react';
import Grid from 'react-css-grid';
import Tile from './Tile'
import Start from './Start'
import "../App.css";

const NewMap = () => {
    const [combatState, setCombatState] = useState({
		startTiles: [130, 118, 13, 1],
		leftWall: [130, 117, 104, 91, 78, 65, 52, 39, 26, 13],
		rightWall: [118, 105, 92, 79, 66, 53, 40, 27, 14, 1],
		currentTile: 0,
		canMoveTo: [],
		didStart: false,
	});

    const createBoard = () => {
        let tileArray = [];
        for (let counter = 130; counter > 0; counter--) {
            tileArray.push(counter)
        }
        return occupyTiles(tileArray)
    }

    console.log(combatState.didStart)


    const occupyTiles = (tileArray) => {
		return tileArray.map((number) =>
			combatState.startTiles.includes(number) ? (
				<Start
					startGame={startGame}
					didStart={combatState.didStart}
					number={number}
				/>
			) : combatState.canMoveTo.includes(number) ? (
				<Tile move={move} number={number} />
			) : (
				<Tile number={number} />
			)
		);
	};

    const startGame = (number) => {
        setCombatState({
            didStart: true,
            currentTile: number
        }, () => updateCanMoveTo())
    }

    console.log(combatState.canMoveTo)

    const updateCanMoveTo = () => {
        console.log('hit')
        let updatedCanMoveTo = []

        updatedCanMoveTo.push((combatState.currentTile + 13), combatState.currentTile - 13)

        if (!combatState.leftWall.includes(combatState.currentTile)) {
           updatedCanMoveTo.push(combatState.currentTile + 1) 
        }
        if (!combatState.rightWall.includes(combatState.currentTile)) {
            updatedCanMoveTo.push(combatState.currentTile - 1);
        }

        console.log(updatedCanMoveTo)

        setCombatState({
            canMoveTo: [updatedCanMoveTo]
        })
    }

    const move = (number) => {
        setCombatState({
            currentTile: number
        }, () => updateCanMoveTo())
    }


    return (
			<div className='game-board'>
				<Grid width={50} gap={0}>
					{createBoard()}
				</Grid>
			</div>
		);
};

export default NewMap;