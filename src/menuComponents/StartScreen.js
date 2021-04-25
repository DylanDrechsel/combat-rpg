import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { gameState as gameStateAtom } from '../App';
import { characterState as characterStateAtom } from '../App'
import { motion } from 'framer-motion';
import { Row, Col, Container, Button } from 'react-bootstrap';
import '../App.css'
import MaleOne from '../assests/m1.png';
import MaleTwo from '../assests/m2.png';
import FemaleOne from '../assests/f1.png';
import FemaleTwo from '../assests/f2.png';
import useSound from 'use-sound';
import StartMenuAudio from '../assests/music/StartMenuAgain.mp3'

const StartScreen = () => {
    const [game, setGame] = useRecoilState(gameStateAtom)
    const [character, setCharacter] = useRecoilState(characterStateAtom)
    const [x, setX] = useState(0);
	const [playbackRate, setPlaybackRate] = useState(0.90)
	const [play, {stop}] = useSound(StartMenuAudio, {
		volume: 0.15,
		playbackRate,
		interrupt: true
	});

    const handleMaleOneSelect = () => {
			setCharacter('m1')
			setGame('normal');
			stop();
		
    }
    
    const handleMaleTwoSelect = () => {
			setCharacter('m2')
			setGame('normal');
			stop();
    }

    const handleFemaleOneSelect = () => {
			setCharacter('f1')
			setGame('normal');
			stop();
    }

    const handleFemaleTwoSelect = () => {
			setCharacter('f2')
			setGame('normal');
			stop();
    }

    useEffect(() => {
        setTimeout(() => {
            x <= 32 ? setX(x + 32) : setX(x - 64);
        }, '300')
	}, [x]);

    return (
			<div
				onMouseEnter={play}
				style={{ 'padding-top': '10vh', 'overflow-x': 'hidden' }}>
				<Container fluid>
					<Row className='justify-content-md-center'>
						<Col md='auto'>
							<motion.div
								initial={{ x: '70vw' }}
								animate={{
									rotate: 2140,
									x: 0,
									boxShadow: '0px 3px 0 rgba(0, 0, 0, 0.2)',
									transitionEnd: {
										'font-weight': 'bold',
									},
								}}
								transition={{ duration: 2, type: 'tween' }}>
								<h1>
									<b style={{ 'font-family': 'VT323', 'font-size': '100px' }}>
										DUNGEON DIVE
									</b>
								</h1>
							</motion.div>
						</Col>
					</Row>

					<Row className='justify-content-md-center'>
						<Col style={{ 'text-align': 'center' }}>
							<div
								className='mb-2'
								style={{ 'margin-top': '35vh', width: '100vw' }}>
								<h1 style={{ 'font-family': 'VT323', color: 'white' }}>
									Please Select your Character!
								</h1>
								<Button
									variant='primary'
									size='lg'
									onClick={handleMaleOneSelect}>
									{' '}
									<motion.div
										whileHover={{ scale: 3 }}
										style={{
											height: `32px`,
											width: `32px`,
											backgroundImage: `url(${MaleOne})`,
											backgroundRepeat: 'no-repeat',
											backgroundPosition: `-${x}px  0px`,
										}}></motion.div>
								</Button>{' '}
								<Button
									variant='secondary'
									size='lg'
									onClick={handleFemaleOneSelect}>
									<motion.div
										whileHover={{ scale: 3 }}
										style={{
											height: `32px`,
											width: `32px`,
											backgroundImage: `url(${FemaleOne})`,
											backgroundRepeat: 'no-repeat',
											backgroundPosition: `-${x}px  0px`,
										}}></motion.div>
								</Button>{' '}
								<Button
									variant='primary'
									size='lg'
									onClick={handleMaleTwoSelect}>
									<motion.div
										whileHover={{ scale: 3 }}
										style={{
											height: `32px`,
											width: `32px`,
											backgroundImage: `url(${MaleTwo})`,
											backgroundRepeat: 'no-repeat',
											backgroundPosition: `-${x}px  0px`,
										}}></motion.div>
								</Button>
								<Button
									variant='secondary'
									size='lg'
									onClick={handleFemaleTwoSelect}>
									<motion.div
										whileHover={{ scale: 3 }}
										style={{
											height: `32px`,
											width: `32px`,
											backgroundImage: `url(${FemaleTwo})`,
											backgroundRepeat: 'no-repeat',
											backgroundPosition: `-${x}px  0px`,
										}}></motion.div>
								</Button>
							</div>
						</Col>
					</Row>

					<div style={{ 'margin-top': '20vh' }} />
				</Container>
			</div>
		);
};

export default StartScreen;