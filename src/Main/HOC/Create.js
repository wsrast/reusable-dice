import React, {Fragment} from 'react';
import styled from 'styled-components';
import {DiceContextConsumer} from '../../contexts/dicecontext';
import {Button, Card} from '@material-ui/core';

import WithRoller from './WithRoller';

const CardStyled = styled(Card)`
	padding: ${({theme}) => theme.spacing}px;
`;

const CardWithRoller = WithRoller(CardStyled);

//todo: need to find a way to add the HOC rolling functions to
// the Card and allow the Button to call its

const Create = () => (
	<DiceContextConsumer>
		{({created}) => (
			<Fragment>
				<div>
					{created.map((roller, i) => (
						<CardWithRoller key={`roller${i}`}>
							<div>Roller {i}</div>
							<div>Rolls: {roller.number}</div>
							<div>Sides: {roller.sides}</div>
							<Button color="primary">Roll</Button>
						</CardWithRoller>
					))}
				</div>
				<div>Add Roller</div>
			</Fragment>
		)}
	</DiceContextConsumer>
);

export default Create;
