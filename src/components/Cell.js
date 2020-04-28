import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

export default const Cell = ({ type }) => (
	<StyledCell type{'L'} color={TETROMINOS['L'].color}></StyledCell>
)
