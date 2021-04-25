import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { gameState as gameStateAtom } from '../../App';
import useSound from 'use-sound';
import AudioFile from '../../assests/music/RpgMap-Death.mp3';

const RestartButton = () => {
    const [gameState, setGameState] = useRecoilState(gameStateAtom)
	const [playbackRate, setPlaybackRate] = useState(.75);
	
	const [play, { stop }] = useSound(AudioFile, {
		volume: 0.15,
		playbackRate,
		interrupt: true,
	});

    const handleRestart = () => {
		stop()
        setGameState('startMenu')
    }

    return (
			<div onMouseEnter={play} >
				<Row className='justify-content-md-center'>
					<Button size='lg' variant='outline-danger' onClick={handleRestart}>
						<h1 style={{ 'font-family': 'VT323'}}>Try Again</h1>
					</Button>{' '}
				</Row>
			</div>
		);
};

export default RestartButton;