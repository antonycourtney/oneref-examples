import React from 'react';
import {
    appContainer,
    StateRef,
    InitialStateEffect,
    StateChangeEffect,
    utils as onerefUtils
} from 'oneref';
import ReactDOM from 'react-dom';
import TodoListEditor from './components/TodoListEditor';
import TodoAppState from './todoAppState';
import * as todoServer from './mockTodoServer';
import * as actions from './actions';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const init: InitialStateEffect<TodoAppState> = (appState: TodoAppState) => {
    const serviceIter = onerefUtils.publisherAsyncIterable(
        todoServer.subscribe
    );
    const stIter = onerefUtils.aiMap(serviceIter, actions.create);
    return stIter;
};

/*
 * Not needed for this app, but emits a few console logging messages
 * when called to show how this works.
 */
const onStateChange: StateChangeEffect<TodoAppState> = (
    appState: TodoAppState,
    stateRef: StateRef<TodoAppState>
) => {
    console.log('onStateChange: ', appState.toJS());
};

const initialAppState = new TodoAppState();

const TodoApp = appContainer<TodoAppState, {}>(
    initialAppState,
    TodoListEditor,
    init,
    onStateChange
);

ReactDOM.render(<TodoApp />, document.getElementsByClassName('todoapp')[0]);
