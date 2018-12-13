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
		const {
			roller: {number, sides}
		} = this.props;
		let ret = [];

		console.log(`number: `, number, `sides: `, sides);

		for (let n = 1; n <= number; n++) {
			console.log(`rolled`);
			ret.push(Math.ceil(Math.random() * sides));
		}
		this.setState({rolls: ret});
	};

	getTotal = () => {
		const {rolls} = this.state;
		return rolls.reduce((acc, val, i, arr) => {
			return acc + val;
		}, 0);
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
						<h5>Results:</h5>
					</Grid>
					<Grid item xs={12}>
						<Grid container>
							{this.state.rolls.map((val, i) => (
								<Grid item xs={12} sm={6} lg={3} key={`roll${i}`}>
									{val}{' '}
								</Grid>
							))}
						</Grid>
					</Grid>
					<Grid item>
						<h5>Total: {this.getTotal()}</h5>
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
