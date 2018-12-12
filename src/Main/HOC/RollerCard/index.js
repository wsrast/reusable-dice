import React, {Component} from 'react';
import styled from 'styled-components';
import {Button, Card, Grid} from '@material-ui/core';

const RollerStyled = styled(Card)`
	padding: ${({theme}) => theme.spacing}px;
	padding-top: 0;
`;

export default class RollerCard extends Component {
	state = {
		rolls: []
	};

	handleRoll = () => {
		console.log(`rolling`);
	};

	render() {
		const {
			props: {
				index,
				roller: {number, sides}
			}
		} = this;

		return (
			<RollerStyled>
				<Grid container>
					<Grid item xs={12}>
						<h4>Roller {index}</h4>
					</Grid>
					<Grid item xs={12} sm={6}>
						<div>Rolls: {number}</div>
					</Grid>
					<Grid item xs={12} sm={6}>
						<div>Sides: {sides}</div>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" onClick={this.handleRoll}>
							Roll
						</Button>
					</Grid>
				</Grid>
			</RollerStyled>
		);
	}
}

/*const RollerCard = ({roller, index}) => (
	<RollerStyled>
		<h4>Roller {index}</h4>
		<div>Rolls: {roller.number}</div>
		<div>Sides: {roller.sides}</div>
		<Button variant="contained" onClick={this.handleRoll}>Roll</Button>
	</RollerStyled>
);

export default RollerCard;*/
