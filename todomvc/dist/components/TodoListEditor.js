/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import Footer from './Footer';
import Header from './Header';
import MainSection from './MainSection';
import React from 'react';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';
var FILTERS_MAP = new Map([
    [ALL_TODOS, function (item) { return true; }],
    [ACTIVE_TODOS, function (item) { return !item.complete; }],
    [COMPLETED_TODOS, function (item) { return item.complete; }]
]);
var TodoListEditor = function (_a) {
    var appState = _a.appState, setState = _a.setState;
    var _b = React.useState(ALL_TODOS), nowShowing = _b[0], setNowShowing = _b[1];
    var allTodos = appState.getAll();
    var filteredTodos = allTodos.filter(FILTERS_MAP.get(nowShowing));
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, { setState: setState }),
        React.createElement(MainSection, { todos: filteredTodos, areAllComplete: appState.areAllComplete(), setState: setState }),
        React.createElement(Footer, { allTodos: allTodos, nowShowing: nowShowing, setNowShowing: setNowShowing, setState: setState })));
};
export default TodoListEditor;
