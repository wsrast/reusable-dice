import React, {Component} from 'react';
import styled from 'styled-components';
import {Button, Card, Grid} from '@material-ui/core';

const RollerStyled = styled(Card)`
	margin: 0 ${({theme}) => theme.spacing}px ${({theme}) => theme.spacing}px 0;
	padding: ${({theme}) => theme.spacing}px;
	padding-top: 0;
	width: calc(25% + 8px);
`;

const ULStyled = styled.ul`
	display: flex;
	flex-flow: row wrap;
	list-style: none;
	padding: 0;
`;

const ItemStyled = styled.li`
	border: 1px solid #009;
	box-sizing: border-box;
	display: inline-block;
	flex: auto;
	padding: 12px;
	margin: 0 8px 8px 0;
	text-align: center;
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

		//console.log(`number: `, number, `sides: `, sides);

		for (let n = 1; n <= number; n++) {
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

	componentDidMount() {
		this.handleRoll();
	}

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
						<ULStyled>
							{this.state.rolls.map((val, i) => (
								<ItemStyled key={`roll${i}`}>{val} </ItemStyled>
							))}
						</ULStyled>
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
