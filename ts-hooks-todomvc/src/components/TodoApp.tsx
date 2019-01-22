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

const initialAppState = new TodoAppState();

const TodoApp = () => {
  const [appState, setState] = React.useState(initialAppState);

  const allTodos = appState.getAll();

  return (
    <>
      <Header setState={setState} />
      <MainSection
          allTodos={allTodos}
          areAllComplete={appState.areAllComplete()}
          setState={setState}
        />

      <Footer allTodos={allTodos} setState={setState} />
    </>
  )
}

// TODO: split in to TodoList component and AppContainer that handles state initialization

export default TodoApp;
