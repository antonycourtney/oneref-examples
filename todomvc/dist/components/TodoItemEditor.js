/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import React from 'react';
import TodoTextInput from './TodoTextInput';
import * as actions from '../actions';
import classNames from 'classnames';
var TodoItemEditor = function (_a) {
    var todo = _a.todo, setState = _a.setState;
    var _b = React.useState(false), isEditing = _b[0], setIsEditing = _b[1];
    var onSave = function (text) {
        setState(actions.updateText(todo, text));
        setIsEditing(false);
    };
    var input;
    if (isEditing) {
        input =
            React.createElement(TodoTextInput, { className: 'edit', onSave: onSave, value: todo.text });
    }
    // List items should get the class 'editing' when editing
    // and 'completed' when marked as completed.
    // Note that 'completed' is a classification while 'complete' is a state.
    // This differentiation between classification and state becomes important
    // in the naming of view actions toggleComplete() vs. destroyCompleted().
    return (React.createElement("li", { className: classNames({
            'completed': todo.complete,
            'editing': isEditing
        }), key: todo.id },
        React.createElement("div", { className: 'view' },
            React.createElement("input", { className: 'toggle', type: "checkbox", checked: todo.complete, onChange: function () { return setState(actions.toggleComplete(todo)); } }),
            React.createElement("label", { onDoubleClick: function () { return setIsEditing(true); } }, todo.text),
            React.createElement("button", { className: "destroy", onClick: function () { return setState(actions.destroy(todo.id)); } })),
        input));
};
export default TodoItemEditor;
