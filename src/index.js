import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider, connect} from 'react-redux';
import PropTypes from 'prop-types';

class Counter extends Component{
	
	render = () =>
	{	const { value, inc } = this.props
    
		return(
		<div>
			<span>{value}</span><br></br>
			<button onClick={inc}>Increase </button>
		</div>
		)
	}
}

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	inc: PropTypes.func.isRequired
}

const increaseA = {type: 'increase'}

const counter = (state = {count: 0}, action) => {
	const count = state.count
	switch(action.type)
	{
		case 'increase': return { count:count+1}
		default: return state
	}
}

const store= createStore(counter)

const mapStateToProps = (state) =>
{
	return	{ value:state.count
	}
}

const mapDispatchToProps = (dispatch) =>
{
	return {
		inc : () => dispatch(increaseA)
	}
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter)

ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root'));
registerServiceWorker();
