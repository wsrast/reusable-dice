import React from 'react';
import styled from 'styled-components';
import {DiceContextConsumer} from '../../contexts/dicecontext';

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

const Create = () => (
	<DiceContextConsumer>
		{({created}) => (
			<FlexStyled>
				{created.map((roller, i) => (
					<RollerCard key={`roller${i}`} roller={roller} index={i} />
				))}
				<div>Add Roller</div>
			</FlexStyled>
		)}
	</DiceContextConsumer>
);

export default Create;
