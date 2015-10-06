'use strict';

import * as React from 'react';
import * as OneRef from 'oneref';
import TodoItem from './todoItem';
import TodoAppState from './todoAppState';
import TodoApp from './components/TodoApp.react';

const todoAppState = new TodoAppState();
const stateRef = new OneRef.Ref(todoAppState);
const stateRefUpdater = OneRef.refUpdater(stateRef);

React.render(
  <TodoApp stateRef={stateRef} stateRefUpdater={stateRefUpdater} />,
  document.getElementById('todoapp')
);
