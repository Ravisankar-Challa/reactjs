import React from 'react'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8091';
axios.defaults.timeout = 2000;
axios.defaults.headers.common['Authorization'] = 'test';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default class ItemList extends React.Component {
	constructor() {
		super();
		this.state = {
			items: [],
			hasErrored: false,
	        isLoading: true
		};
	}
	
	componentDidMount() {
		axios.get('/todoList.json')
			 .then((response) => {
				 console.log(response.data);
				 console.log(response.status);
				 console.log(response.statusText);
				 console.log(response.headers);
				 console.log(response.config);
				 this.setState({ isLoading: false, items: response.data });
				 
			 })
			 .catch((error) => {
				 if(error.response) {
					 console.log(error.response.data);
				     console.log(error.response.status);
				     console.log(error.response.headers);
			 	 } else {
			 		console.log('Error', error.message);
			 	 }
			 	 console.log(error.config);
			 });
	}
	
	render() {
		if (this.state.hasErrored) {
			return <p>Sorry! There was an error loading the items</p>;
	    }
	    if (this.state.isLoading) {
	        return <p>Loading…</p>;
	    }
		return(
			<ul>
				{
					this.state.items.map(item => (
						<li key={item.id}>
	                        {item.label}
	                    </li>
	                ))
				}
			</ul>
		);
	}
	
}