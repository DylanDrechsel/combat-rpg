import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const HowToPlay = () => {
    const [show, setShow] = useState(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
			<Modal.Header style={{ backgroundColor: 'black' }} closeButton>
				<Modal.Title style={{ backgroundColor: 'black', color: 'white' }}>
					<h1 style={{ 'font-family': 'VT323' }}>How To Play!</h1>
				</Modal.Title>
			</Modal.Header>

			<Modal.Body
				style={{
					'font-family': 'VT323',
					backgroundColor: 'black',
					color: 'white',
				}}>
				<p>
					Both you and the enemy have a total of 5 action points to spend per
					turn. Once you use all your action points your turn is over. There are
					two actions you can choose: <br />
					<br />
					Move: <br />
					<p style={{ 'margin-left': '20px' }}>
						Cost 1 action points. Valid moves are indicated by the green squares
						on the map.
					</p>
					<br />
					Attack: <br />
					<p style={{ 'margin-left': '20px' }}>
						Cost 1 action point. Can only attack when enemy is one space away
						from you in non-diagonal direction. Valid attacks are indicated by
						the red square on the map.
					</p>
					<br />
                    <p>
                        If you kill the enemy you'll go back to the map. If the enemy kills you your journey ends here...
                    </p>
				</p>
			</Modal.Body>

			<Modal.Footer style={{ backgroundColor: 'black' }}>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default HowToPlay;