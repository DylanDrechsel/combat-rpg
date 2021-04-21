import React, { useEffect, useState } from 'react';

const UseDraggable = () => {
    const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const handle = document.getElementById('handle');

		handle.addEventListener('mousedown', (event) => {
			event.preventDefault();
			handle.style.pointerEvents = 'none';

			document.body.addEventListener('mousemove', move);
			document.body.addEventListener('mouseup', () => {
    			document.body.removeEventListener('mousemove', move);
					handle.style.pointerEvents = 'initial';
			});
		});

		return () => {
			document.body.removeEventListener('mousedown', move);
			document.body.removeEventListener('mousemove', move);
			document.body.removeEventListener('mouseup', move);
		};
	}, []);

	const move = (event) => {
		const pos = {
			x: event.clientX,
			y: event.clientY,
		};
		setPosition(pos);
	};

    return {
        position
    }
};

export default UseDraggable;