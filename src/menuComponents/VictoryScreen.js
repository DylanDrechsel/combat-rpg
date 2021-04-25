import React from 'react';
import {Animated} from "react-animated-css";
import PlayAgainButton from './StartScreenComponents/PlayAgainButton'

const VictoryScreen = () => {

    return (
			<div
				style={{
					'overflow-y': 'hidden',
					height: '100vh',
					backgroundColor: 'tan',
				}}>
				<Animated
					animationIn='pulse'
					animationInDuration={5000}
					isVisible={true}>
					<h1
						style={{
							'font-family': 'VT323',
							color: 'black',
							'text-align': 'center',
							'padding-top': '35vh',
							'font-size': '104px',
							'padding-left': '2vw',
						}}>
						You Won!
					</h1>
				</Animated>

				<PlayAgainButton />
			</div>
		);
};

export default VictoryScreen;