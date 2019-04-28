/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import React from 'react';
import TodoItemEditor from './TodoItemEditor';
import * as actions from '../actions';
var MainSection = function (_a) {
    var todos = _a.todos, areAllComplete = _a.areAllComplete, setState = _a.setState;
    // This section should be hidden by default
    // and shown when there are todos.
    if (todos.count() < 1) {
        return null;
    }
    var todosJS = todos.toJS();
    var todosArr = todos.toArray();
    var itemEditors = [];
    for (var key in todosArr) {
        itemEditors.push(React.createElement(TodoItemEditor, { key: key, todo: todosArr[key], setState: setState }));
    }
    return (React.createElement("section", { className: "main" },
        React.createElement("input", { id: "toggle-all", className: "toggle-all", type: "checkbox", onChange: function () { return setState(actions.toggleCompleteAll); }, checked: areAllComplete }),
        React.createElement("label", { htmlFor: "toggle-all" }, "Mark all as complete"),
        React.createElement("ul", { className: "todo-list" }, itemEditors)));
};
export default MainSection;
