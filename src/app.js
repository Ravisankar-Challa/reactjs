import React from 'react';
import { render } from 'react-dom';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		return(
			<div>Test</div>
		);
	}
}

render( <App />, document.getElementById('root'));