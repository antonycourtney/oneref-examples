/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import React from 'react';
import * as actions from '../actions';
import classNames from 'classnames';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';
var Footer = function (_a) {
    var allTodos = _a.allTodos, nowShowing = _a.nowShowing, setState = _a.setState, setNowShowing = _a.setNowShowing;
    var total = allTodos.count();
    if (total === 0) {
        return null;
    }
    var completed = allTodos.count(function (item) { return item.complete; });
    var itemsLeft = total - completed;
    var itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
    itemsLeftPhrase += 'left';
    // Undefined and thus not rendered if no completed items are left.
    var clearCompletedButton;
    if (completed) {
        clearCompletedButton =
            React.createElement("button", { className: "clear-completed", onClick: function (e) { return setState(actions.clearCompleted); } },
                "Clear completed (",
                completed,
                ")");
    }
    return (React.createElement("footer", { className: "footer" },
        React.createElement("span", { className: "todo-count" },
            React.createElement("strong", null, itemsLeft),
            " ",
            itemsLeftPhrase),
        React.createElement("ul", { className: "filters" },
            React.createElement("li", null,
                React.createElement("a", { onClick: function () { return setNowShowing(ALL_TODOS); }, className: classNames({ selected: nowShowing === ALL_TODOS }) }, "All")),
            ' ',
            React.createElement("li", null,
                React.createElement("a", { onClick: function () { return setNowShowing(ACTIVE_TODOS); }, className: classNames({ selected: nowShowing === ACTIVE_TODOS }) }, "Active")),
            ' ',
            React.createElement("li", null,
                React.createElement("a", { onClick: function () { return setNowShowing(COMPLETED_TODOS); }, className: classNames({ selected: nowShowing === COMPLETED_TODOS }) }, "Completed"))),
        clearCompletedButton));
};
export default Footer;
