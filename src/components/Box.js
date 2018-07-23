import React from 'react';

export default class Box extends React.Component {
	render() {
		return(
			<div className="box">
				<h4>{this.props.name}</h4>
			</div>
		);
	}
}
