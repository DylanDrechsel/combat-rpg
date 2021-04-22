import React, { useState, useEffect } from 'react';
import Grid from 'react-css-grid';
import Tile from './Tile'
import Start from './Start'
import "../App.css";
import PlayerCharacter from './PlayerCharacter';
import EnemyCharacter from './EnemyCharacter';
import PlayerCombatInfo from './PlayerCombatInfo';
import EnemyCombatInfo from './EnemyCombatInfo';

const NewMap = () => {
    const [combatState, setCombatState] = useState({
		leftWall: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
		rightWall: [1, 11, 21, 31, 41, 51, 61, 71, 81, 91],
        topWall: [100, 99, 98, 97, 96, 95, 94, 93, 92, 91],
        bottomWall: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	});

    const [playerInfo, setPlayerInfo] = useState({
        health: 100,
        currentTile: [1],
        canMoveTo: [],
        didStart: false,
        actionPoints: 10
    })

    const [enemyInfo, setEnemyInfo] = useState({
        health: 100,
        currentTile: [100],
        canMoveTo: [],
        // For some reason the computer needs 2 action points for move...
        actionPoints: 10
    })
    
    const createBoard = () => {
        let tileArray = [];
        for (let counter = 100; counter > 0; counter--) {
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
            updatedCanMoveTo.push(gamePlayer.currentTile[0] - 10)
            }
        if (!combatState.topWall.includes(gamePlayer.currentTile[0])) {
            updatedCanMoveTo.push(gamePlayer.currentTile[0] + 10)
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
            actionPoints: prevState.actionPoints - 2
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
                    actionPoints: 10
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
        <div style={{backgroundColor: 'black', height: '100vh'}}>
            <PlayerCombatInfo playerInfo={playerInfo} enemyInfo={enemyInfo}/>
            <EnemyCombatInfo playerInfo={playerInfo} enemyInfo={enemyInfo}/>

			<div className='game-board'>
				<Grid width={125} gap={0}>
					{createBoard()}
				</Grid>
			</div>
        </div>
		);
};

export default NewMap;