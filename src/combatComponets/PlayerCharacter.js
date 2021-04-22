import React from 'react';
import Image from '../assests/m1Single.png'

const PlayerCharacter = () => {

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

export default PlayerCharacter;