import React from 'react';
import Cell from './Cell';

export default const Stage = ({ stage }) => (
	<div> //for each row renders each cell with nothing in them
		{stage.map(row => row.map((cell, x) => <cell key={x} type={cell[0]} />)}
	</div>
)