import { atom, useRecoilState } from 'recoil';
import './App.css';
import Character from "./assests/m1.png"
import Player from "./playerComponents/Player"
import LevelOne from './mapComponents/LevelOne';
import CombatMap from './combatComponets/CombatMap'
import { Row, Col, Container } from 'react-bootstrap';

import ToolBox from './mapComponents/ToolBox'


export const gameState = atom({
	key: 'gameState',
	default: 'combat'
})

function App() {
	const [game, setGame] = useRecoilState(gameState)

	if (game === 'normal') {
		return (
			<div>

				<div>
					<LevelOne />
				</div>
				
				<Player skin={Character} />
			</div>
		);
	} else if (game === 'combat') {
		return (
			<div className='Combat' >

				<Container fluid="md">
					<Row>
						<Col sm={5}>
							
						</Col>
					</Row>
				</Container>

				<CombatMap />

				<Player skin={Character} />
			</div>
		);
	}
}

export default App;
