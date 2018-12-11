import React, {Component} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {DiceContextProvider} from './contexts/dicecontext';

import Main from './Main';

const theme = createMuiTheme({
	typography: {
		useNextVariants: true
	}
});

const styledTheme = {
	color: theme.palette.primary.main,
	spacing: theme.spacing.unit * 3,
	appBarMargin: theme.spacing.unit * 10
};

const AppStyled = styled.div`
	flex-grow: 1;
	color: ${styledTheme.color};
`;

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={styledTheme}>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					<DiceContextProvider>
						<AppStyled>
							<AppBar>
								<Toolbar>
									<Typography variant="h5">Reusable Dice</Typography>
								</Toolbar>
							</AppBar>
							<Main />
						</AppStyled>
					</DiceContextProvider>
				</MuiThemeProvider>
			</ThemeProvider>
		);
	}
}

export default App;
