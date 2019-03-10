/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React from 'react';
import TodoItem from '../todoItem';
import TodoItemEditor from './TodoItemEditor';
import TodoAppState from '../todoAppState';
import * as actions from '../actions';
import { StateRef, update } from 'oneref';
import { Seq } from 'immutable';

interface MainSectionProps {
    todos: Seq.Set<TodoItem>;
    areAllComplete: boolean;
    stateRef: StateRef<TodoAppState>;
}

const MainSection = ({ todos, areAllComplete, stateRef }: MainSectionProps) => {
    // This section should be hidden by default
    // and shown when there are todos.
    if (todos.count() < 1) {
        return null;
    }

    const todosJS = todos.toJS();
    const todosArr = todos.toArray();
    let itemEditors = [];

    for (var key in todosArr) {
        itemEditors.push(
            <TodoItemEditor
                key={key}
                todo={todosArr[key]}
                stateRef={stateRef}
            />
        );
    }

    return (
        <section className="main">
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                onChange={() => update(stateRef, actions.toggleCompleteAll)}
                checked={areAllComplete}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">{itemEditors}</ul>
        </section>
    );
};
export default MainSection;
