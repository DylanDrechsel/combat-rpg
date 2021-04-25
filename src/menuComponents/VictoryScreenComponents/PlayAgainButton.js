import React from 'react';
import { useRecoilState } from 'recoil';
import { gameState as gameStateAtom } from '../../App';
import { Button, Row } from 'react-bootstrap';
import useSound from 'use-sound';
import AudioFile from '../../assests/music/Victory.mp3';

const PlayAgainButton = () => {
    const [gameState, setGameState] = useRecoilState(gameStateAtom)
	const [play, { stop }] = useSound(AudioFile, {
		volume: 0.25,
		interrupt: true,
	});

    const handleRestart = () => {
		stop()
        setGameState('startMenu')
    }
    
    return (
			<div onMouseEnter={play}>
				<Row className='justify-content-md-center'>
					<Button size='lg' variant='success' onClick={handleRestart}>
						<h1 style={{ 'font-family': 'VT323' }}>Play Again</h1>
					</Button>{' '}
				</Row>
			</div>
		);
};

export default PlayAgainButton;