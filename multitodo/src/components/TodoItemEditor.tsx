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
import TodoItem from '../todoItem';
import TodoAppState from '../todoAppState';
import * as actions from '../actions';
import { StateRef, update } from 'oneref';
import classNames from 'classnames';

interface TodoItemEditorProps {
    todo: TodoItem;
    stateRef: StateRef<TodoAppState>;
}

const TodoItemEditor = ({ todo, stateRef }: TodoItemEditorProps) => {
    const [isEditing, setIsEditing] = React.useState(false);

    const onSave = (text: string): void => {
        update(stateRef, actions.updateText(todo, text));
        setIsEditing(false);
    };

    let input;
    if (isEditing) {
        input = (
            <TodoTextInput className="edit" onSave={onSave} value={todo.text} />
        );
    }

    // List items should get the class 'editing' when editing
    // and 'completed' when marked as completed.
    // Note that 'completed' is a classification while 'complete' is a state.
    // This differentiation between classification and state becomes important
    // in the naming of view actions toggleComplete() vs. destroyCompleted().
    return (
        <li
            className={classNames({
                completed: todo.complete,
                editing: isEditing
            })}
            key={todo.id}
        >
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() =>
                        update(stateRef, actions.toggleComplete(todo))
                    }
                />
                <label onDoubleClick={() => setIsEditing(true)}>
                    {todo.text}
                </label>
                <button
                    className="destroy"
                    onClick={() => update(stateRef, actions.destroy(todo.id))}
                />
            </div>
            {input}
        </li>
    );
};

export default TodoItemEditor;
