import React from 'react';
import { appContainer } from 'oneref';
import ReactDOM from 'react-dom';
import TodoListEditor from './components/TodoListEditor';
import TodoAppState from './todoAppState';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const initialState = new TodoAppState();
const TodoApp = appContainer<TodoAppState>(initialState, TodoListEditor);

ReactDOM.render(<TodoApp />, document.getElementsByClassName('todoapp')[0]);
