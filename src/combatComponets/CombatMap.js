import "../App.css"
import React from 'react';
import GridSquare from "./GridSquare"
import { Row, Col } from "react-bootstrap"

const combatMap = () => {
    const grid = []
    
    for (let row = 0; row < 5; row++) {
        grid.push([<GridSquare key={`${row}0`}/>]);
        for (let col = 0; col < 5; col++) {
            grid.push([<GridSquare key={`${row}${col + 1}`} />]);
        }
	}
    
    const getLocations = (string) => {
        let y = string.split("")
        const x = parseInt(y.splice(0, 1))
        y = parseInt(y)

        console.log(x, y)
        
        return[x, y]
    }

    return (
		<div className='GridBoard'>
			<Row>

				{grid.map((element) => {
                    return (
		    			<Col xs={{ span: 2 }}>
                            <div onClick={() => getLocations(element[0].key)}>
				    		    <GridSquare />
                            </div>
                            {/* <p>{element[0].key}</p> */}
						</Col>
					);
                })}

				</Row>
			</div>
		);
};

export default combatMap;