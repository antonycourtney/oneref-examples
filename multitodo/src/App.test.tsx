import React from 'react';
import ReactDOM from 'react-dom';
import * as oneref from 'oneref';
import MultiTodoListEditor from './components/MultiTodoListEditor';
import MultiTodoAppState from './multiTodoAppState';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const initialAppState = new MultiTodoAppState();

const TodoApp = oneref.appContainer<MultiTodoAppState, {}>(
    initialAppState,
    MultiTodoListEditor
);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});
