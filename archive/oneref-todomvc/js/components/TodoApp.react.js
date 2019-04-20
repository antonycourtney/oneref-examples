/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Top-level component for rendering the Todo list application; takes AppState
 * as a property.
 * 
 */
import Footer from './Footer.react';
import Header from './Header.react';
import MainSection from './MainSection.react';
import React from 'react';

export default class TodoApp extends React.Component {
  render() {
    const appState = this.props.appState;
    const allTodos = appState.getAll();
    return (
      <div>
        <Header stateRefUpdater={this.props.stateRefUpdater} />
        <MainSection
          allTodos={allTodos}
          areAllComplete={appState.areAllComplete()}
          stateRefUpdater={this.props.stateRefUpdater}
        />
        <Footer allTodos={allTodos} stateRefUpdater={this.props.stateRefUpdater} />
      </div>
    );
  }
}