import React, {Component} from 'react';
import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import Layout from './Layout';
import SavedHOC from './HOC/Saved';
import CreateHOC from './HOC/Create';

/* Interesting way of using styled-components here to assign Grid attributes.
 * This allows the 'spacing' attribute value to be used both by MUI and
 * styled-components without duplicating the hard coded number. */
const GridStyled = styled(Grid).attrs(({theme}) => ({
	spacing: theme.spacing
}))`
	padding: ${({theme}) => theme.appBarMargin}px ${({theme}) => theme.spacing}px;
`;

export default class Main extends Component {
	render() {
		return (
			<GridStyled container>
				<Layout Saved={SavedHOC} Create={CreateHOC} />
			</GridStyled>
		);
	}
}
