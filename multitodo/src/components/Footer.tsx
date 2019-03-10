/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React from 'react';
import TodoItem from '../todoItem';
import TodoAppState from '../todoAppState';
import * as actions from '../actions';
import { StateRef, update } from 'oneref';
import { Seq } from 'immutable';
import classNames from 'classnames';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

interface FooterProps {
    allTodos: Seq.Set<TodoItem>;
    nowShowing: string;
    setNowShowing: (ns: string) => void;
    stateRef: StateRef<TodoAppState>;
}

const Footer = ({
    allTodos,
    nowShowing,
    stateRef,
    setNowShowing
}: FooterProps) => {
    const total = allTodos.count();

    if (total === 0) {
        return null;
    }

    const completed = allTodos.count(item => item.complete);

    const itemsLeft = total - completed;
    let itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
    itemsLeftPhrase += 'left';

    // Undefined and thus not rendered if no completed items are left.
    let clearCompletedButton;
    if (completed) {
        clearCompletedButton = (
            <button
                className="clear-completed"
                onClick={e => update(stateRef, actions.clearCompleted)}
            >
                Clear completed ({completed})
            </button>
        );
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{itemsLeft}</strong> {itemsLeftPhrase}
            </span>
            <ul className="filters">
                <li>
                    <a
                        onClick={() => setNowShowing(ALL_TODOS)}
                        className={classNames({
                            selected: nowShowing === ALL_TODOS
                        })}
                    >
                        All
                    </a>
                </li>{' '}
                <li>
                    <a
                        onClick={() => setNowShowing(ACTIVE_TODOS)}
                        className={classNames({
                            selected: nowShowing === ACTIVE_TODOS
                        })}
                    >
                        Active
                    </a>
                </li>{' '}
                <li>
                    <a
                        onClick={() => setNowShowing(COMPLETED_TODOS)}
                        className={classNames({
                            selected: nowShowing === COMPLETED_TODOS
                        })}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            {clearCompletedButton}
        </footer>
    );
};

export default Footer;
