import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { gameState as gameStateAtom } from '../../App';

const RestartButton = () => {
    const [gameState, setGameState] = useRecoilState(gameStateAtom)
    const handleRestart = () => {
        setGameState('startMenu')
    }

    return (
			<div>
                <Row className='justify-content-md-center'>
				    <Button variant='outline-danger' onClick={handleRestart}>Try Again</Button>{' '}
                </Row>
			</div>
		);
};

export default RestartButton;