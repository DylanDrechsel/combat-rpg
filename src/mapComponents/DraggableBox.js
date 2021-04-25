import React from 'react';
import DragHandler from '../img/drag-handle.png';
import UseDraggable from '../hooks/UseDraggable';

const DraggableBox = () => {
    const { position } = UseDraggable('handle');

    return (
			<div>
				<div
					style={{
						position: 'absolute',
						border: '1px solid black',
						top: position.y,
						left: position.x,
						zIndex: 100,
						width: 200,
						height: 200,
						backgroundColor: 'white',
					}}>
					<img id='handle' src={DragHandler} />
				</div>
			</div>
		);
};

export default DraggableBox;