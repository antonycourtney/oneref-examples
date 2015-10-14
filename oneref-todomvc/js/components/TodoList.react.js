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
var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var React = require('react');

var TodoListItem = React.createClass({
  /**
   * @return {object}
   */
  render: function() {
    const appState = this.props.appState;
    const allTodos = appState.getAll();
    const areAllComplete = appState.areAllComplete();
    return (
      <div>
        <Header stateRefUpdater={this.props.stateRefUpdater} />
        <MainSection
          allTodos={allTodos}
          areAllComplete={areAllComplete}
          stateRefUpdater={this.props.stateRefUpdater}
        />
        <Footer allTodos={allTodos} stateRefUpdater={this.props.stateRefUpdater} />
      </div>
    );
  },
});

module.exports = TodoListItem;
