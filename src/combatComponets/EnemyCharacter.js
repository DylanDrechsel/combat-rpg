import React from 'react';
import Image from '../assests/e1Single.png'

const EnemyCharacter = () => {
    return (
        <div
			style={{
				width: 32,
				height: 32,
				backgroundImage: `url(${Image})`,
				backgroundColor: 'tan',
				backgroundRepeat: 'no-repeat',
			}}></div>
    );
};

export default EnemyCharacter;