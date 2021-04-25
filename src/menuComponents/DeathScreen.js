import React from 'react';
import RestartButton from './DeathScreenComponents/RestartButton'


const DeathScreen = () => {
    return (
    <div>
        <h1 style={{ color: 'red', 'text-align': 'center', 'padding-top': '45vh' }}>YOU DIED...</h1>
        <RestartButton />
    </div>
    );
};

export default DeathScreen;