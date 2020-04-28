import React from 'react';
import Cell from './Cell';
import { StyledStage } from './styles/StyledStage';

export default const Stage = ({ stage }) => (
    //for each row renders each cell with nothing in them
	<StyledStage width={stage[0].length} height={stage.length}> 
		{stage.map(row => row.map((cell, x) => <cell key={x} type={cell[0]} />)}
	</StyledStage>
)
