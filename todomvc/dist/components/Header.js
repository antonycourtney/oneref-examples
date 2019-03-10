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
var Header = function (_a) {
    var setState = _a.setState;
    var onSave = function (text) {
        if (text.trim()) {
            setState(actions.create(text));
        }
    };
    return (React.createElement("header", { className: "header" },
        React.createElement("h1", null, "todos"),
        React.createElement(TodoTextInput, { className: "new-todo", placeholder: "What needs to be done?", onSave: onSave })));
};
export default Header;
