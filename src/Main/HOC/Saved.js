import React, {Fragment} from 'react';
import {DiceContextConsumer} from '../../contexts/dicecontext';
//Use

const Saved = () => (
	<DiceContextConsumer>
		{(state) => (
			<Fragment>
				<div>saved 1</div>
			</Fragment>
		)}
	</DiceContextConsumer>
);

export default Saved;
