import React from 'react';
import ReactDOM from 'react-dom';
import * as oneref from 'oneref';
import TodoListEditor from './components/TodoListEditor';
import TodoAppState from './todoAppState';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const initialAppState = new TodoAppState();

const TodoApp = oneref.appContainer<TodoAppState, {}>(
    initialAppState,
    TodoListEditor
);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});
