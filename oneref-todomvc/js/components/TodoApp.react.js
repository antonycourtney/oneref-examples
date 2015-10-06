/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoState and passes the new data to its children.
 */

var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var React = require('react');

/**
 * Retrieve the current TODO data from the TodoState
 */
function getTodoState(stateRef) {
  const currentState = stateRef.getValue();
  return {
    allTodos: currentState.getAll(),
    areAllComplete: currentState.areAllComplete()
  };
}

var TodoApp = React.createClass({

  getInitialState: function() {
    return getTodoState(this.props.stateRef);
  },

  componentDidMount: function() {
    const stateRef=this.props.stateRef;
    stateRef.on("change",this._onChange);
  },

  componentWillUnmount: function() {
    const stateRef=this.props.stateRef;
    stateRef.removeListener("change",this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <Header stateRefUpdater={this.props.stateRefUpdater} />
        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
          stateRefUpdater={this.props.stateRefUpdater}
        />
        <Footer allTodos={this.state.allTodos} stateRefUpdater={this.props.stateRefUpdater} />
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoState
   */
  _onChange: function() {
    this.setState(getTodoState(this.props.stateRef));
  }

});

module.exports = TodoApp;
