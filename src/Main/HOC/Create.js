import React, {Fragment} from 'react';
import {DiceContextConsumer} from '../../contexts/dicecontext';

import RollerCard from './RollerCard';

//import WithRoller from './WithRoller';

//const CardWithRoller = WithRoller(CardStyled);

//todo: need to find a way to add the HOC rolling functions to
// the Card and allow the Button to call its

const Create = () => (
	<DiceContextConsumer>
		{({created}) => (
			<Fragment>
				<div>
					{created.map((roller, i) => (
						<RollerCard key={`roller${i}`} roller={roller} index={i} />
					))}
				</div>
				<div>Add Roller</div>
			</Fragment>
		)}
	</DiceContextConsumer>
);

export default Create;
