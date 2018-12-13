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
				},
				{
					number: 2,
					sides: 6
				},
				{
					number: 2,
					sides: 10
				},
				{
					number: 2,
					sides: 6
				},
				{
					number: 2,
					sides: 10
				},
				{
					number: 5,
					sides: 6
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
