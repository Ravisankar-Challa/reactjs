/* import { createStore } from 'redux' */
const { createStore, combineReducers, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')
const thunk = require('redux-thunk').default

function userReducer(state={}, action) {
	switch(action.type) {
		case 'CHANGE_USER': {
			//state.name = action.payload
			state = Object.assign({}, state, {name: action.payload});
			break;
		}
		case 'CHANGE_AGE': {
			//state.age = action.payload
			state = Object.assign({}, state, {age: action.payload});
			break;
		}
	}
	return state;
}

function tweetsReducer(state=[], action) {
	return state;
}

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
})

/*const logger = (store) => (next) => (action) => {
	console.log("Action " + action.type)
	next(action)
}*/
const myMiddleware = applyMiddleware(createLogger({colors: false}), thunk)
const store = createStore(reducers, myMiddleware)

/*store.subscribe(function() {	console.log("store changed : " + JSON.stringify(store.getState()))
})*/

store.dispatch({type: 'CHANGE_USER', payload: 'Will'})
store.dispatch({type: 'CHANGE_AGE', payload: 25})

