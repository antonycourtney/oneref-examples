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
import {StateSetter} from '../oneref';
import {Seq} from 'immutable';

interface FooterProps {
  allTodos: Seq.Set<TodoItem>
  setState: StateSetter<TodoAppState>
}

const Footer = ({ allTodos, setState}: FooterProps) => {
  const total = allTodos.count();

  if (total === 0) {
    return null;
  }

  const completed = allTodos.count((item) => item.complete);

  const itemsLeft = total - completed;
  let itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
  itemsLeftPhrase += 'left';

  // Undefined and thus not rendered if no completed items are left.
  let clearCompletedButton;
  if (completed) {
    clearCompletedButton =
      <button
        id="clear-completed"
        onClick={(e) => setState(actions.clearCompleted)}>
        Clear completed ({completed})
      </button>;
  }

  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>
          {itemsLeft}
        </strong>
        {itemsLeftPhrase}
      </span>
      {clearCompletedButton}
    </footer>
  );
}

export default Footer;