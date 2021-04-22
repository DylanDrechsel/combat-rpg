import React, { useState, useEffect } from 'react';
import Grid from 'react-css-grid';
import Tile from './Tile'
import Start from './Start'
import "../App.css";
import PlayerCharacter from './PlayerCharacter';
import EnemyCharacter from './EnemyCharacter'

const NewMap = () => {
    const [combatState, setCombatState] = useState({
		leftWall: [130, 117, 104, 91, 78, 65, 52, 39, 26, 13],
		rightWall: [118, 105, 92, 79, 66, 53, 40, 27, 14, 1],
	});

    const [playerInfo, setPlayerInfo] = useState({
        health: 100,
        currentTile: [1],
        canMoveTo: [],
        didStart: false,
        actionPoints: 5
    })

    const [enemyInfo, setEnemyInfo] = useState({
        health: 100,
        currentTile: [130],
        canMoveTo: [],
        actionPoints: 5
    })
    
    const createBoard = () => {
        let tileArray = [];
        for (let counter = 130; counter > 0; counter--) {
            tileArray.push(counter)
        }
        return occupyTiles(tileArray)
    }

    console.log(combatState)
    console.log(playerInfo)
    console.log(enemyInfo)

    const occupyTiles = (tileArray) => {
		return tileArray.map((number) =>
			playerInfo.currentTile.includes(number) ? (
				<PlayerCharacter
					number={number}
					// startGame={startGame}
					didStart={playerInfo.didStart}
				/>
			) : enemyInfo.currentTile.includes(number) ? (
                <EnemyCharacter />
            ) : playerInfo.canMoveTo.includes(number) ? (
				<Tile move={playerMove} number={number} />
			) : (
				<Tile number={number} />
			)
		);
	};

    // const startGame = (number) => {
    //     setPlayerInfo(prevState => ({
    //         ...prevState,
    //         currentTile: [number]
    //     }), () => updateCanMoveTo())
    // }

    const updateCanMoveTo = (gamePlayer) => {
        let updatedCanMoveTo = []

        updatedCanMoveTo.push(
					gamePlayer.currentTile[0] + 13,
					gamePlayer.currentTile[0] - 13
				);

        if (!combatState.leftWall.includes(gamePlayer.currentTile[0])) {
					updatedCanMoveTo.push(gamePlayer.currentTile[0] + 1);
				}
        if (!combatState.rightWall.includes(gamePlayer.currentTile[0])) {
					updatedCanMoveTo.push(gamePlayer.currentTile[0] - 1);
				}

        if (gamePlayer === playerInfo) {
            setPlayerInfo(prevState => ({
                ...prevState,
                canMoveTo: updatedCanMoveTo
            }))
        } else if (gamePlayer === enemyInfo) {
            setEnemyInfo(prevState => ({
                ...prevState,
                canMoveTo: updatedCanMoveTo
            }))
        }
    }

    const playerMove = (number) => {
        if (!playerInfo.didStart) {
            setPlayerInfo(prevState => ({
            ...prevState,
            didStart: true
            }))
        }

        setPlayerInfo(prevState => ({
            ...prevState,
            currentTile: [number],
            actionPoints: prevState.actionPoints - 1
        }), () => updateCanMoveTo())
    }

    useEffect(() => {
			updateCanMoveTo(playerInfo);
            updateCanMoveTo(enemyInfo);
		}, [playerInfo.currentTile, enemyInfo.currentTile]);


    return (
			<div className='game-board'>
				<Grid width={50} gap={0}>
					{createBoard()}
				</Grid>
			</div>
		);
};

export default NewMap;