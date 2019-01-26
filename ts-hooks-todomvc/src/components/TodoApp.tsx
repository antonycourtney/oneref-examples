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
import TodoAppState from '../todoAppState';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import TodoItem from '../todoItem';

const initialAppState = new TodoAppState();

const FILTERS_MAP = new Map<string, (item: TodoItem) => boolean>([
  [ ALL_TODOS, (item: TodoItem) => true ],
  [ ACTIVE_TODOS, (item: TodoItem) => !item.complete ],
  [ COMPLETED_TODOS, (item: TodoItem) => item.complete ]
]);

const TodoApp = () => {
  const [appState, setState] = React.useState(initialAppState);

  const [nowShowing, setNowShowing] = React.useState(ALL_TODOS);

  const allTodos = appState.getAll();

  const filteredTodos = allTodos.filter(FILTERS_MAP.get(nowShowing)!);

  return (
    <>
      <Header setState={setState} />
      <MainSection
          todos={filteredTodos}
          areAllComplete={appState.areAllComplete()}
          setState={setState}
        />

      <Footer 
        allTodos={allTodos} 
        nowShowing={nowShowing}
        setNowShowing={setNowShowing} 
        setState={setState} />
    </>
  )
}

// TODO: split in to TodoList component and AppContainer that handles state initialization

export default TodoApp;
