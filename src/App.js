import { atom, useRecoilState } from 'recoil';
import './App.css';
import Character from "./assests/m1.png"
import Player from "./playerComponents/Player"
import LevelOne from './mapComponents/LevelOne';
import CombatMap from './combatComponets/CombatMap'
import { Row, Col, Container } from 'react-bootstrap';

import CombatInfo from './combatComponets/PlayerCombatInfo'


export const gameState = atom({
	key: 'gameState',
	default: 'combat'
})

function App() {
	const [game, setGame] = useRecoilState(gameState)

	if (game === 'normal') {
		return (
			<div className='App'>

				<div>
					<LevelOne />
				</div>
				
				<Player skin={Character} />
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
	}
}

export default App;
