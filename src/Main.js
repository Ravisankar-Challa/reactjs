import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/Box.js';
import ItemList from './components/ItemList.js';
import './resources/styles/style.css';

export default class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			name: 'Hello World !!!',
			time: new Date().toString()
		}
	}
	changeName(event){
		this.setState({name: 'Ravisankar Reddy Challa'});
	}
	showTime(event){
		this.setState({time: new Date().toString()});
	}
	render(){
		return(
			<div>
				<div className="loading">
				  <div className="loader"></div>
				</div>
				<input type='text' className='textField' placeholder='Input Text'></input><br /><br />
				{/*<input type='text' className='textField' placeholder='Input Text'></input><br /><br />*/}
				{/*<input type='submit' value='Primary button' className='button button--caps button--fullwidth' /><br /><br />}*/}
				{/*<button className='button button--caps button--fullwidth'>Primary Button</button><br />*/}
				<p>{this.state.name}</p>
				<button onClick = {this.changeName.bind(this)} className='button button--caps button--fullwidth'>Change Name</button>
				<p>{this.state.time}</p>
				<button onClick = {this.showTime.bind(this)} className='button button--caps button--fullwidth'>Show Time</button>
				<Box name="Ravi"/>
				<Box name="Sankar"/>
				<Box name="Test"/>
				<ItemList />
			</div>
		);
	}
}

ReactDOM.render(<Main/>, document.getElementById('root'));