import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import {Add} from '@material-ui/icons';
import {Button} from '@material-ui/core';

const ButtonStyled = styled(Button)`
	margin: 0 ${({theme}) => theme.spacing}px ${({theme}) => theme.spacing}px 0 !important;
`;

export default class CreateCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 1,
			sides: 20
		};
	}

	handleAdd = () => {
		this.props.handleCreate(this.state);
	};

	render() {
		return (
			<Fragment>
				<ButtonStyled onClick={this.handleAdd} variant="outlined">
					<Add />
				</ButtonStyled>
			</Fragment>
		);
	}
}
