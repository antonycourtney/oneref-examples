import React, { Component } from 'react';
import { StateRefProps } from 'oneref';

import HelloAppState from './helloAppState';
import * as actions from './actions';

import logo from './logo.svg';
import './App.css';

/*
 * TODO:
 * <button onClick={() => this.props.showNotificationWithTimeout('Hello')}>Show "Hello"</button>
 * <button onClick={() => this.props.showNotificationWithTimeout('Async')}>Show "Async"</button>
 *
 * {this.props.notifications.map((notification, index) => {
 *   return <h1 key={notification.id}>{notification.text}</h1>
 * })}
 */
type HelloAppProps = {} & StateRefProps<HelloAppState>;

const App: React.FunctionComponent<HelloAppProps> = ({
    appState,
    stateRef
}: HelloAppProps) => {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <div>
                <button
                    onClick={() =>
                        actions.showNotificationWithTimeout(stateRef, 'Hello')
                    }
                >
                    Show "Hello"
                </button>
                &nbsp;
                <button
                    onClick={() =>
                        actions.showNotificationWithTimeout(stateRef, 'Async')
                    }
                >
                    Show "Async"
                </button>
                {appState.notifications.map(notification => (
                    <h1 key={notification.id}>{notification.text}</h1>
                ))}
            </div>
        </div>
    );
};

export default App;
