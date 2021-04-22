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
        topWall: [130, 129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118],
        bottomWall: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
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
        // For some reason the computer needs 2 action points for move...
        actionPoints: 10
    })
    
    const createBoard = () => {
        let tileArray = [];
        for (let counter = 130; counter > 0; counter--) {
            tileArray.push(counter)
        }
        return occupyTiles(tileArray)
    }

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
				<Tile playerMove={playerMove} number={number} />
			) : (
				<Tile number={number} />
			)
		);
	};

    const updateCanMoveTo = (gamePlayer) => {
        let updatedCanMoveTo = []

        if (!combatState.bottomWall.includes(gamePlayer.currentTile[0])) {
            updatedCanMoveTo.push(gamePlayer.currentTile[0] - 13)
            }
        if (!combatState.topWall.includes(gamePlayer.currentTile[0])) {
            updatedCanMoveTo.push(gamePlayer.currentTile[0] + 13)
            }
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
        }))  
    }

    //WORKING HERE
    const computerMove = (number) => {
        setEnemyInfo(prevState => ({
            ...prevState,
            currentTile: [number],
            actionPoints: prevState.actionPoints - 1
        }))
    }

    const computerTurn = () => {
        setTimeout(() => {
            if (enemyInfo.currentTile == playerInfo.currentTile[0] - 1 && enemyInfo.actionPoints > 1) {
                console.log('Right next')
                setEnemyInfo(prevState => ({
                ...prevState,
                actionPoints: prevState.actionPoints - 2
            }))} 
            else if (enemyInfo.actionPoints > 1 && enemyInfo.health >= 80) {
                const goal = playerInfo.currentTile[0]

                const closest = enemyInfo.canMoveTo.reduce((prev, curr) => {
                    return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr - 1 : prev )
                })

                closest === playerInfo.currentTile[0] ? computerMove(closest - 1) : computerMove(closest) 
            } 
            else {
                setPlayerInfo(prevState => ({
                    ...prevState,
                    actionPoints: 5
                }))
                setEnemyInfo(prevState => ({
                    ...prevState,
                    actionPoints: 10
                }))
            }
        }, '500');
    }

    useEffect(() => {
        if (playerInfo.actionPoints === 0) {
           computerTurn()
            }
        }, [playerInfo.actionPoints, enemyInfo.actionPoints])

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