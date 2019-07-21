import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Default inputs for state in formInput reducer 
let defaultInputs = {
    feelings: 0,
    understanding: 0,
    support: 0,
    comments: ''
}

// Default inputs for state in inputsIn reducer 
let inputsCheck = {
    feelings: false,
    understanding: false,
    support: false,
    comments: false
}

/**
 * Reducer that stores the user input from all froms
 * @param {object} state stores values to pass with props
 * @param {object} action contains action type to determine what to do with payload
 */
const formInput = (state = defaultInputs, action) => {
    if (action.type === 'SET_FEELINGS') {
        state.feelings = action.payload;
        return state;
    } else if (action.type === 'SET_UNDERSTANDING') {
        state.understanding = action.payload;
        return state;
    } else if (action.type === 'SET_SUPPORT') {
        state.support = action.payload;
        return state;
    } else if (action.type === 'SET_COMMENTS') {
        state.comments = action.payload;
        return state;
    }
    return state;
}

/**
 * Reducer that stores if the user has completed the forms
 * @param {object} state stores values to pass with props
 * @param {object} action contains action type to determine what to do with payload
 */
const inputsIn = (state = inputsCheck, action) => {
    if (action.type === 'CHECK_FEELINGS') {
        state.feelings = action.payload;
        return state;
    } else if (action.type === 'CHECK_UNDERSTANDING') {
        state.understanding = action.payload;
        return state;
    } else if (action.type === 'CHECK_SUPPORT') {
        state.support = action.payload;
        return state;
    } else if (action.type === 'CHECK_COMMENTS') {
        state.comments = action.payload;
        return state;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        formInput,
        inputsIn
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
