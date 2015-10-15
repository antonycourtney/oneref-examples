'use strict';

import React from 'react';
import * as Immutable from 'immutable';
import DashboardApp from './components';
import * as DT from './dashboardTypes';
import * as OneRef from 'oneref';
import AppState from './AppState';
import * as actions from './actions';

const baseState = new AppState();
const stateRef = new OneRef.Ref(baseState);
const stateRefUpdater = OneRef.refUpdater(stateRef);

const ws = new WebSocket('ws://localhost:4000');
ws.onmessage = function (event) {
  const parsedUpdate = JSON.parse(event.data);
  actions.updateObiWan(parsedUpdate,stateRefUpdater);
};
// start things off
actions.requestSithInfo(true,3616,stateRefUpdater);

React.render(
  <DashboardApp stateRef={stateRef} refUpdater={stateRefUpdater} />,
  document.getElementById('app')
);