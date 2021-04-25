import { atom, useRecoilState } from 'recoil';
import './App.css';
import MaleOne from "./assests/m1.png"
import MaleTwo from './assests/m2.png';
import FemaleOne from './assests/f1.png';
import FemaleTwo from './assests/f2.png';
import Player from "./playerComponents/Player"
import LevelOne from './mapComponents/LevelOne';
import CombatMap from './combatComponets/CombatMap'
import StartScreen from './menuComponents/StartScreen'
import DeathScreen from './menuComponents/DeathScreen'
import { Row, Col, Container } from 'react-bootstrap';

export const gameState = atom({
	key: 'gameState',
	default: 'startMenu'
})

export const characterState = atom({
	key: 'chatacterState',
	default: 'm1'
})

// export const locationXState = atom({
// 	key: 'locationXState',
// 	default: 484
// })

// export const locationYState = atom({
// 	key: 'locationYState',
// 	default: 174,
// });

function App() {
	const [game, setGame] = useRecoilState(gameState)
	const [character, setCharacter] = useRecoilState(characterState)
	let Character;

	character === 'm1' ? Character = MaleOne : character === 'm2' ? Character = MaleTwo : character === 'f1' ? Character = FemaleOne : Character = FemaleTwo

	if (game === 'startMenu') {
		return (
			<div className='startMenu'>
				<StartScreen />
			</div>
		);
	} else if (game === 'normal') {
		return (
			<div className='App'>
				<div style={{ 'padding-top': '18vh', 'padding-left': '50vh' }}>
					<Player skin={Character} />
					<LevelOne />
				</div>
			</div>
		);
	} else if (game === 'combat') {
		return (
			<div className='Combat'>
				{/* <Container fluid='md'> */}
					{/* <Row> */}
						<Col sm={12} style={{backgroundColor: 'black'}}>
							<CombatMap />
						</Col>
					{/* </Row> */}
				{/* </Container> */}

			</div>
		);
	} else if (game === 'death') {
		return (
			<div className='App'>
				<DeathScreen />
			</div>
		)
	}
}

export default App;
