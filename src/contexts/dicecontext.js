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
				}
			]
		};
	}

	/**
	 * Create a new roller based on config options
	 * @param {Object} options - contains number, sides and modifier.
	 */
	handleCreate = (e, options = {number: 1, sides: 20}) => {
		this.setState((state) => {
			console.log(`options `, options);
			return {
				...state,
				created: [...state.created, options]
			};
		});
	};

	render() {
		const {children} = this.props;

		return (
			<DiceContext.Provider
				value={{
					...this.state,
					handleCreate: this.handleCreate
				}}
			>
				{children}
			</DiceContext.Provider>
		);
	}
}

export const DiceContextConsumer = DiceContext.Consumer;
