import React, {Component} from 'react';

const DiceContext = React.createContext();

export class DiceContextProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			saved: [],
			created: [
				{
					number: 1,
					sides: 20
				}
			]
		};
	}

	render() {
		const {children} = this.props;

		return (
			<DiceContext.Provider
				value={{
					...this.state
				}}
			>
				{children}
			</DiceContext.Provider>
		);
	}
}

export const DiceContextConsumer = DiceContext.Consumer;
