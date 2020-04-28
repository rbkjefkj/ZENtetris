import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

import { createStage } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

export default const Tetris = () => {
	return (
        <StyledTetrisWrapper>
            <StyledTetris>
			    <Stage stage={createStage()} />
			    <aside>
				    <Display text="Score"/>
				    <Display text="Rows"/>
				    <Display text="Level"/>
				    <StartButton/>	
			    </aside>
		    </StyledTetris>
        </StyledTetrisWrapper>
	);
};
