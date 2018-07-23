# reactjs
1) Install nodejs  
2) Create a folder for the project ex: mkdir testproject  
3) cd testproject  
4) npm init (this will create package json file)  
5) change scripts in package.json  
   "scripts": {  
		"start": "webpack --debug --display-max-modules 500 --progress && webpack-dev-server --content-base public/ --inline --hot --port 8091",  
		"build": "webpack --optimize-minimize --define process.env.NODE_ENV="'production'""  same as 'webpack -p'  
	},  
4) npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react style-loader css-loader url-loader file-loader webpack webpack-dev-server  
5) npm install --save react react-dom react-router axios  
6) npm install --save-dev mocha chai enzyme sinon react-addons-test-utils  
7) mkdir -p src/components  
8) mkdir public  
9) cd src and touch Main.js  
   Add the following in to Main.js  
```javascript   
   import React from'react';
   import ReactDOM from'react-dom';

   class HelloWorldComponent extends React.Component {
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
				<p>{this.state.name}</p>
				<button onClick = {this.changeName.bind(this)} >Change Name</button>
				<p>{this.state.time}</p>
				<button onClick = {this.showTime.bind(this)} >Show Time</button>
			</div>
		);
	}
  }

  ReactDOM.render(<HelloWorldComponent/>, document.getElementById('root'));
```  
10) cd ../public and touch index.html  
   Add the following text in to index.html  
   <!DOCTYPE html>  
   <html lang="en">  
    <head>  
      <meta charset="UTF-8">  
      <title>React JS App</title>  
    </head>  
    <body>  
       <div id="root"></div>  
       <script src="bundle.js"></script>  
    </body>  
   </html>  
  
11) cd.. and touch webpack.config.js  
   Add the following in to the above file.  
   const webpack = require('webpack');  
   const path = require('path');  
   
   const SRC_DIR = path.resolve(__dirname, 'src');  
   const BUILD_DIR = path.resolve(__dirname, 'public');  
   
   const webpackConfig = {  
		entry: SRC_DIR + '/Main.js',  
		output: {  
			path: BUILD_DIR,  
			filename: 'bundle.js'  
		},  
		module: {  
			rules: [  
				{  
					test: /\.(js|jsx)$/,  
					include: SRC_DIR,  
					exclude: /(node_modules)/,  
					use: {  
						loader: 'babel-loader',  
						options: {  
							presets: ['es2015', 'react']  
						}  
					}  
				},  
				{  
					test: /\.css$/,  
					use: ['style-loader', 'css-loader']  
				},  
				{  
					test: /\.(png|jpg|gif|svg|eot|tff|woff|woff2)$/,  
					use: {  
						loader: 'url-loader',  
						options: {  
							limit: 20000000  
						}  
					}  
				}  
			]  
		}  
   }  
   module.exports = webpackConfig;  
12) npm start      
  
Testing  
1) assertions: Chai/Expect/Jasmine  
2) mocks, spies, stubs: Sinon.JS/Jasmine  
3) To test React app you also need some utilities to work with JSX, rendering or shallow rendering, component traversing or simulating user actions.   
   This is job for React Test Utils or Enzyme.  
4) provide test structure: Mocha/Jasmine/Jest  
5) run tests and display test results Mocha/Jasmine/Jest/Karma  
  
Jest is recommended by Facebook to test React components however Mocha with Enzyme is widely popular  
Jest is slower because its auto mocking feature  
You don’t need auto mocking when you test React components  
Mocha more flexible and it is expected to be used with other libriaries like Chai, Sinon.JS  
Jasmine is all-in-one test library (runner, assertions, mocks)  
Installation and setup is not the criteria for choosing the right test framework  
  