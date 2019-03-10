import React from 'react';
import * as oneref from 'oneref';
import ReactDOM from 'react-dom';
import MultiTodoListEditor from './components/MultiTodoListEditor';
import MultiTodoAppState from './multiTodoAppState';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const initialAppState = new MultiTodoAppState();

const MultiTodoApp = oneref.appContainer<MultiTodoAppState, {}>(
    initialAppState,
    MultiTodoListEditor
);

ReactDOM.render(
    <MultiTodoApp />,
    document.getElementsByClassName('todoapp')[0]
);
