import React from 'react';
import Image from '../assests/m1Single.png'

const PlayerCharacter = () => {

    return (
			<div className='tile'>
				<div
					style={{
						width: "100%",
						height: "100%",
						backgroundImage: `url(${Image})`,
						backgroundColor: 'tan',
						backgroundRepeat: 'no-repeat',
					}}></div>
			</div>
		);
};

export default PlayerCharacter;