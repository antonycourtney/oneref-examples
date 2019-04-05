import React from 'react';
import ReactDOM from 'react-dom';
import {
    appContainer,
    StateRef,
    utils as onerefUtils,
    update
} from 'oneref';

import './index.css';
import App from './App';
import HelloAppState from './helloAppState';

const MainApp = appContainer<HelloAppState>(new HelloAppState(), App);

ReactDOM.render(<MainApp />, document.getElementById('root'));
