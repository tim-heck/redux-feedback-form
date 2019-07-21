import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

let defaultInputs = {
    feelings: 0,
    understanding: 0,
    support: 0,
    comments: ''
}

let inputsCheck = {
    feelings: true,
    understanding: true,
    support: true,
    comments: true
}

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
