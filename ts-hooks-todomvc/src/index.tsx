import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoAppState from './todoAppState';
import * as serviceWorker from './serviceWorker';

const todoAppState = new TodoAppState();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
