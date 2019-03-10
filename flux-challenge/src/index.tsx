import React from 'react';
import {
    appContainer,
    StateRef,
    StateChangeEffect,
    utils as onerefUtils,
    InitialStateEffect,
    update
} from 'oneref';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import DashboardAppState from './dashboardAppState';
import { PlanetInfo } from './dashboardTypes';
import * as actions from './actions';
import * as Immutable from 'immutable';

type ObiWanListener = (event: any) => void;

const obiWanSubscribe = (listener: ObiWanListener) => {
    const ws = new WebSocket('ws://localhost:4000');
    ws.onmessage = function(event) {
        const parsedUpdate = JSON.parse(event.data);
        listener(parsedUpdate);
    };
};

const init: InitialStateEffect<DashboardAppState> = (
    appState: DashboardAppState,
    stateRef: StateRef<DashboardAppState>
) => {
    const serviceIter = onerefUtils.publisherAsyncIterable(obiWanSubscribe);
    actions.processObiWanUpdates(serviceIter, stateRef);

    // start things off
    actions.requestSithInfo(true, 3616, stateRef);
};

const initialAppState = new DashboardAppState();

const DashboardApp = appContainer<DashboardAppState>(
    initialAppState,
    Dashboard,
    init
);

ReactDOM.render(<DashboardApp />, document.getElementById('app'));
