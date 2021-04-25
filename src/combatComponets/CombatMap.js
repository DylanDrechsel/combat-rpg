import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { gameState as gameStateAtom } from '../App';
import Grid from 'react-css-grid';
import Tile from './Tile'
import "../App.css";
import PlayerCharacter from './PlayerCharacter';
import EnemyCharacter from './EnemyCharacter';
import PlayerCombatInfo from './PlayerCombatInfo';
import EnemyCombatInfo from './EnemyCombatInfo';
import HowToPlay from './HowToPlay';

const NewMap = () => {
    const [gameState, setGameState] = useRecoilState(gameStateAtom)
    const [isComputerTurn, setIsComputerTurn] = useState(false)

    const [combatState, setCombatState] = useState({
		leftWall: [9, 19, 29, 39, 49, 59, 69, 79, 89, 99],
		rightWall: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        topWall: [99, 98, 97, 96, 95, 94, 93, 92, 91, 90],
        bottomWall: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	});

    const [playerInfo, setPlayerInfo] = useState({
        health: 100,
        currentTile: [4],
        canMoveTo: [],
        didStart: false,
        actionPoints: 5,
        attacks: [
            {
            name: "bash",
            damage: 12
        }]
    })

    const [enemyInfo, setEnemyInfo] = useState({
        health: 100,
        currentTile: [95],
        actionPoints: 5,
        attacks: [
            {
            name: "Spook",
            damage: 8
            },
            {
            name: "Ghost Punch",
            damage: 11
            }
    ]   
    })
    
    const createBoard = () => {
        let tileArray = [];
        for (let counter = 99; counter >= 0; counter--) {
            tileArray.push(counter)
        }
        return occupyTiles(tileArray)
    }

    // console.log(playerInfo)
    // console.log(enemyInfo)

    const occupyTiles = (tileArray) => {
		return tileArray.map((number) =>
			playerInfo.currentTile.includes(number) ? (
				<PlayerCharacter
					number={number}
					didStart={playerInfo.didStart}
				/>
			) : enemyInfo.currentTile.includes(number) ? (
                <EnemyCharacter player={playerInfo} enemy={enemyInfo} attack={playerAttack} />
            ) : playerInfo.canMoveTo.includes(number) ? (
				<Tile playerMove={playerMove} number={number} />
			) : (
				<Tile number={number} />
			)
		);
	};

    const updateCanMoveTo = () => {
        let updatedCanMoveTo = []

        if (!combatState.bottomWall.includes(playerInfo.currentTile[0])) {
            updatedCanMoveTo.push(playerInfo.currentTile[0] - 10)
            }
        if (!combatState.topWall.includes(playerInfo.currentTile[0])) {
            updatedCanMoveTo.push(playerInfo.currentTile[0] + 10)
            }
        if (!combatState.leftWall.includes(playerInfo.currentTile[0])) {
				updatedCanMoveTo.push(playerInfo.currentTile[0] + 1);
			}
        if (!combatState.rightWall.includes(playerInfo.currentTile[0])) {
				updatedCanMoveTo.push(playerInfo.currentTile[0] - 1);
			}

            setPlayerInfo(prevState => ({
                ...prevState,
                canMoveTo: updatedCanMoveTo
            }))
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

    const playerAttack = (attack) => {
        setEnemyInfo((prevState) => ({
            ...prevState,
            health: prevState.health - attack[0].damage
        }))
        setPlayerInfo((prevState) => ({
            ...prevState,
            actionPoints: prevState.actionPoints - 1
        }))
    }

    //WORKING HERE
    const findLocations = (playerLocation, enemyLocation) => {
        let playerLocationY, playerLocationX, enemyLocationY, enemyLocationX;

        if (playerLocation[0] < 10) {
            playerLocationY = 0;
            playerLocationX = playerLocation[0]
        }

        if (playerLocation[0] >= 10) {
            let locationString = playerLocation[0].toString()
            let x = locationString.split('')
            
            playerLocationY = parseInt(x.splice(0, 1))
            playerLocationX = parseInt(x)
        }

        if (enemyLocation[0] < 10) {
            enemyLocationY = 0;
            enemyLocationX = enemyLocation[0]
        }

        if (enemyLocation[0] >= 10) {
            let locationString = enemyLocation[0].toString()
            let x = locationString.split('')
            
            enemyLocationY = parseInt(x.splice(0, 1))
            enemyLocationX = parseInt(x)
        }

        return [playerLocationY, playerLocationX, enemyLocationY, enemyLocationX]
    }

    const computerMove = (
			playerLocationY,
			playerLocationX,
			enemyLocationY,
			enemyLocationX
		) => {
            if (enemyLocationY > playerLocationY) {
                setEnemyInfo(prevState => ({
                    ...prevState,
                    currentTile: [parseInt(prevState.currentTile) - 10],
                    actionPoints: prevState.actionPoints - 1
                }))
            } else if (enemyLocationY < playerLocationY) {
                setEnemyInfo(prevState => ({
                    ...prevState,
                    currentTile: [parseInt(prevState.currentTile) + 10],
                    actionPoints: prevState.actionPoints - 1
                }))
            } else if (enemyLocationY === playerLocationY && enemyLocationX > playerLocationX + 1) {
                setEnemyInfo(prevState => ({
                   ...prevState,
                   currentTile: [parseInt(prevState.currentTile) - 1],
                   actionPoints: prevState.actionPoints - 1
                }))
            } else if (enemyLocationY === playerLocationY && enemyLocationX < playerLocationX) {
                setEnemyInfo(prevState => ({
                   ...prevState,
                   currentTile: [parseInt(prevState.currentTile) + 1],
                   actionPoints: prevState.actionPoints - 1
                }))
            }
        };

    const computerAttack = (attack) => {
        const chance = Math.floor(Math.random() * attack.length)

        setPlayerInfo((prevState) => ({
            ...prevState,
            health: prevState.health - attack[chance].damage
        }))

        setEnemyInfo((prevState) => ({
			...prevState,
			actionPoints: prevState.actionPoints - 1,
		}));
    }

    const computerTurn = () => {
        const [
			playerLocationY,
			playerLocationX,
			enemyLocationY,
			enemyLocationX,
		] = findLocations(playerInfo.currentTile, enemyInfo.currentTile);

        setTimeout(() => {
            if (
				(enemyInfo.currentTile == playerInfo.currentTile[0] - 1 &&
					enemyInfo.actionPoints > 0) ||
				(enemyInfo.currentTile == playerInfo.currentTile[0] + 1 &&
					enemyInfo.actionPoints > 0) ||
				(enemyInfo.currentTile == playerInfo.currentTile[0] - 10 &&
					enemyInfo.actionPoints > 0) ||
				(enemyInfo.currentTile == playerInfo.currentTile[0] + 10 &&
					enemyInfo.actionPoints > 0)
				) {
				    computerAttack(enemyInfo.attacks)
			} else if (enemyInfo.actionPoints > 0 && enemyInfo.health >= 0) {
				computerMove(
					playerLocationY,
					playerLocationX,
					enemyLocationY,
					enemyLocationX
				);
			} else {
				setPlayerInfo((prevState) => ({
					...prevState,
					actionPoints: 5,
				}));
				setEnemyInfo((prevState) => ({
					...prevState,
					actionPoints: 5,
				}));
			}
        }, '500');
    }

    // END WORKING AREA

    useEffect(() => {
        if (playerInfo.actionPoints === 0) {
            setIsComputerTurn(true)
            computerTurn()
            } else {
            setIsComputerTurn(false)
            }
        }, [playerInfo.actionPoints, enemyInfo.actionPoints])

    useEffect(() => {
		updateCanMoveTo();
	}, [playerInfo.currentTile]);

    useEffect(() => {
        if (enemyInfo.health <= 0) {
            setTimeout(() => {
                setGameState('normal')
            }, '1000')
        }

        if (playerInfo.health <= 0) {
            setTimeout(() => {
                setGameState('death')
            }, '1000')
        }
    }, [enemyInfo.health, playerInfo.health])

    return (
			<div style={{ backgroundColor: 'black', height: '100vh' }}>
                <HowToPlay />
				<PlayerCombatInfo playerInfo={playerInfo} enemyInfo={enemyInfo} />
				<EnemyCombatInfo playerInfo={playerInfo} enemyInfo={enemyInfo} />

				<div className='game-board'>
					<Grid
						className={
							isComputerTurn ? 'disable' : 'null'
						}
						width={125}
						gap={0}>
						{createBoard()}
					</Grid>
				</div>
			</div>
		);
};

export default NewMap;