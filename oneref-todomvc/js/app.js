'use strict';

import React from 'react';
import * as ReactDOM from 'react-dom';
import OneRef from 'oneref';
import TodoAppState from './todoAppState';
import TodoApp from './components/TodoApp.react';

const todoAppState = new TodoAppState();
const stateRef = new OneRef.Ref(todoAppState);

ReactDOM.render(
  <OneRef.AppContainer appClass={TodoApp} stateRef={stateRef} />,
  document.getElementById('todoapp')
);
