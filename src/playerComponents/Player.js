import React from 'react';
import Actor from "./Actor"
import useKeyPress from "../hooks/UseKeyPress"
import useWalk from "../hooks/UseWalk"

const Player = ({ skin }) => {
	const { dir, walk, position } = useWalk()
    const data = {
		height: 32,
		width: 32,
	};

	useKeyPress((event) => {
		walk(event.key.replace("Arrow", "").toLowerCase(), 3)
		event.preventDefault();
	})

    return (
		<div>
			<Actor sprite={skin} data={data} dir={dir} position={position} />
		</div>
		);
};

export default Player;