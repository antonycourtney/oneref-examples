import React from 'react';
import ReactDOM from 'react-dom';
import * as oneref from 'oneref';
import TodoListEditor from './components/TodoListEditor';
import TodoAppState from './todoAppState';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
var initialAppState = new TodoAppState();
var TodoApp = oneref.appContainer(initialAppState, TodoListEditor);
it('renders without crashing', function () {
    var div = document.createElement('div');
    ReactDOM.render(React.createElement(TodoApp, null), div);
    ReactDOM.unmountComponentAtNode(div);
});
