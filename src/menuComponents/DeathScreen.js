import React, { useState } from 'react';
import RestartButton from './DeathScreenComponents/RestartButton'
import { Animated } from 'react-animated-css';



const DeathScreen = () => {
    return (
			<div style={{ 'overflow-y': 'hidden', height: '100vh' }}>

					<Animated
						animationIn='pulse'
						animationInDuration={5000}
						isVisible={true}>
							<h1
								style={{
									'font-family': 'VT323',
									color: 'red',
									'text-align': 'center',
									'padding-top': '35vh',
									'font-size': '104px',
									'padding-left': '8vw',
								}}>
								YOU DIED...
							</h1>
					</Animated>
					
				<RestartButton />
			</div>
		);
};

export default DeathScreen;