import React, {Component} from 'react';
import styled from 'styled-components';

const AppStyled = styled.div`
	text-align: center;
`;

const AppHeaderStyled = styled.header`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

class App extends Component {
	render() {
		return (
			<AppStyled>
				<AppHeaderStyled>Reusable Dice</AppHeaderStyled>
			</AppStyled>
		);
	}
}

export default App;
