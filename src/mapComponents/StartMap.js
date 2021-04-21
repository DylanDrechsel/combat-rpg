import React, { useEffect, useState } from 'react';
import DragHandler from '../img/drag-handle.png';
import UseDraggable from '../hooks/UseDraggable'

const StartMap = () => {
    const {position} = UseDraggable("handle")

    return (
        <div>

            <div
				className='App'
				style={{
					position: 'relative',
					width: window.innerWidth,
					height: window.innerHeight,
					overflow: 'hidden',
                    backgroundColor: 'gray'
				}}>
            </div>
				
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
				<img id="handle" src={DragHandler} />
			</div>

        </div>
    );
};

export default StartMap;