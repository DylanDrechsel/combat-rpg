import React from 'react';
import MaleOne from '../assests/m1Single.png';
import MaleTwo from '../assests/m2Single.png';
import FemaleOne from '../assests/f1Single.png';
import FemaleTwo from '../assests/f2Single.png';
import { useRecoilState } from 'recoil';
import { characterState as characterStateAtom } from '../App';

const PlayerCharacter = () => {
	const [character, setCharacter] = useRecoilState(characterStateAtom);
	let Character;

	character === 'm1'
		? (Character = MaleOne)
		: character === 'm2'
		? (Character = MaleTwo)
		: character === 'f1'
		? (Character = FemaleOne)
		: (Character = FemaleTwo);

    return (
			<div className='tile'>
				<div
					style={{
						width: "100%",
						height: "100%",
						backgroundImage: `url(${Character})`,
						backgroundColor: 'tan',
						backgroundRepeat: 'no-repeat',
					}}></div>
			</div>
		);
};

export default PlayerCharacter;