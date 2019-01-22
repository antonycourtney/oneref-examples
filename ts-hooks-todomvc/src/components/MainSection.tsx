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
import {StateSetter} from '../oneref';
import {Seq} from 'immutable';

interface MainSectionProps {
  allTodos: Seq.Set<TodoItem>
  areAllComplete: boolean
  setState: StateSetter<TodoAppState>
}

const MainSection = ({allTodos, areAllComplete, setState}: MainSectionProps) => {
  // This section should be hidden by default
  // and shown when there are todos.
  if (allTodos.count() < 1) {
    return null;
  }

  const allTodosArr = allTodos.toArray();
  var todos = [];

  for (var key in allTodosArr) {
    todos.push(<TodoItemEditor key={key} todo={allTodosArr[key]} setState={setState} />);
  }

  return (
    <section id="main">
      <input
        id="toggle-all"
        type="checkbox"
        onChange={() => setState(actions.toggleCompleteAll)}
        checked={areAllComplete}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul id="todo-list">{todos}</ul>
    </section>
  );

}
export default MainSection;