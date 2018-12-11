import React, {Component} from 'react';

export default function WithRoller(ComposedComponent) {
	return class extends Component {
		state = {
			rolls: []
		};

		handleRoll = (e) => {
			console.log(`Handling roll`);
		};

		render() {
			const {
				props,
				props: {children}
			} = this;
			return <ComposedComponent {...props}>{children}</ComposedComponent>;
		}
	};
}
