import React from 'react';
import styled from 'styled-components';
import {DiceContextConsumer} from '../../contexts/dicecontext';
import {Button} from '@material-ui/core';
import {Add} from '@material-ui/icons';

import RollerCard from './RollerCard';

//import WithRoller from './WithRoller';

//const CardWithRoller = WithRoller(CardStyled);

//todo: need to find a way to add the HOC rolling functions to
// the Card and allow the Button to call its

const FlexStyled = styled.section`
	min-width: calc(100% + 24px);
	display: flex;
	flex-flow: row wrap;
`;

const ButtonStyled = styled(Button)`
	margin: 0 ${({theme}) => theme.spacing}px ${({theme}) => theme.spacing}px 0 !important;
`;

const Create = () => (
	<DiceContextConsumer>
		{({created, handleCreate}) => (
			<FlexStyled>
				{created.map((roller, i) => (
					<RollerCard key={`roller${i}`} roller={roller} index={i} />
				))}
				<ButtonStyled onClick={handleCreate} variant="outlined">
					<Add />
				</ButtonStyled>
			</FlexStyled>
		)}
	</DiceContextConsumer>
);

export default Create;
