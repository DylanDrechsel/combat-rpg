import React from 'react';
import Image from '../assests/e1Single.png'

const EnemyCharacter = () => {
    return (
			<div className='tile'>
				<div
					style={{
						width: 32,
						height: 32,
						backgroundImage: `url(${Image})`,
						backgroundColor: 'tan',
						backgroundRepeat: 'no-repeat',
					}}></div>
			</div>
		);
};

export default EnemyCharacter;