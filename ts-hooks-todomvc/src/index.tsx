import React from 'react';
import * as oneref from './oneref';
import ReactDOM from 'react-dom';
import TodoListEditor from './components/TodoListEditor';
import TodoAppState from './todoAppState';

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

const initialAppState = new TodoAppState();

const MyApp = oneref.withOneRef<TodoAppState, {}>(initialAppState, TodoListEditor);

ReactDOM.render(<MyApp />, document.getElementsByClassName('todoapp')[0]);
