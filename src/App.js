import { atom, useRecoilState } from 'recoil';
import './App.css';
import Character from "./assests/m1.png"
import Player from "./playerComponents/Player"
import CombatMap from "./combatComponets/CombatMap"
import { Row, Col, Container } from 'react-bootstrap';

import NewMap from './combatComponets/NewMap'



export const gameState = atom({
	key: 'gameState',
	default: 'normal'
})

function App() {
	const [game, setGame] = useRecoilState(gameState)

	if (game === 'normal') {
		return (
			<div
				className='App'
				style={{
					position: 'relative',
					width: window.innerWidth,
					height: window.innerHeight,
					overflow: 'hidden',
				}}>
				<Player skin={Character} />
			</div>
		);
	} else if (game === 'combat') {
		return (
			<div className='Combat' >

				<Container fluid="md">
					<Row>
						<Col sm={5}>
							{/* <CombatMap /> */}
						</Col>
					</Row>
				</Container>

				<NewMap />

				<Player skin={Character} />
			</div>
		);
	}
}

export default App;
