'use strict';

import * as React from 'react';
import * as OneRef from 'oneref';
import TodoAppState from './todoAppState';
import TodoApp from './components/TodoApp.react';

const todoAppState = new TodoAppState();
const stateRef = new OneRef.Ref(todoAppState);

React.render(
  <OneRef.AppContainer appClass={TodoApp} stateRef={stateRef} />,
  document.getElementById('todoapp')
);
