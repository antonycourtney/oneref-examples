import React from 'react';
import {
    appContainer,
    StateRef,
    AppStateEffect,
    utils as onerefUtils
} from 'oneref';
import ReactDOM from 'react-dom';
import TodoListEditor from './components/TodoListEditor';
import TodoAppState from './todoAppState';
import * as todoServer from './mockTodoServer';
import * as actions from './actions';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const init: AppStateEffect<TodoAppState> = (
    appState: TodoAppState,
    stateRef: StateRef<TodoAppState>
) => {
    const serviceIter = onerefUtils.publisherAsyncIterable(
        todoServer.subscribe
    );
    const stIter = onerefUtils.aiMap(serviceIter, actions.createTodo);
    onerefUtils.updateFromIterable(stateRef, stIter);
};

const initialAppState = new TodoAppState();

const TodoApp = appContainer<TodoAppState, {}>(
    initialAppState,
    TodoListEditor,
    init
);

ReactDOM.render(<TodoApp />, document.getElementsByClassName('todoapp')[0]);
