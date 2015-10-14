'use strict';

import * as React from 'react';
import TodoItem from './todoItem';
import TodoAppState from './todoAppState';
import TodoApp from './components/TodoApp.react';

const item0 = new TodoItem('This is a test item');
const state0 = new TodoAppState();
const todoAppState = state0.addItem(item0);

React.render(
  <TodoApp appState={todoAppState} />,
  document.getElementById('todoapp')
);
