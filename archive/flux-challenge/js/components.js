/**
 * React UI components for Jedi Dashboard app
 */
'use strict';

import React from 'react';
import * as Immutable from 'immutable';
import * as actions from './actions';
import classNames from 'classnames';

class PlanetMonitor extends React.Component {
  render() {
    const currentPlanet = this.props.currentPlanet;
    const msg = currentPlanet ? `Obi-Wan currently on ${currentPlanet.name}` : "...";
    return (<h1 className="css-planet-monitor">{msg}</h1>);
  }
}

class SithRow extends React.Component {
  render() {
    const sithRow = this.props.sithRow;
    const sith = sithRow ? sithRow.info : null;
    const sithName = sith ? sith.name : (sithRow ? "..." : null);
    const sithHome = sith ? `Homeworld: ${sith.homeworld.name}` : ""
    const style = sith && sith.homeworld.id===this.props.currentPlanet.id ? {color: 'red'} : null;
    return (
      <li className="css-slot" style={style} >
        <h3>{sithName}</h3>
        <h6>{sithHome}</h6>
      </li>
    );
  }  
}

class SithScrollableList extends React.Component {
  handleScrollUp(event) {
    event.preventDefault();
    actions.scroll(-2,this.props.refUpdater);
  }
  handleScrollDown(event) {
    event.preventDefault();
    actions.scroll(2,this.props.refUpdater);
  }
  render() {
    const appState =this.props.appState;
    const siths = appState.sithList.take(5);
    const currentPlanet = appState.obiWanLocation;
    const sithRows = siths.map((sr,k) => <SithRow sithRow={sr} currentPlanet={currentPlanet} key={k} /> );
    const upDisabled = !(appState.canScrollUp());
    const downDisabled = !(appState.canScrollDown());
    const upClassName = classNames('css-button-up', {"css-button-disabled": upDisabled});
    const downClassName = classNames('css-button-down', {"css-button-disabled": downDisabled});
    return (
      <section className="css-scrollable-list">
        <ul className="css-slots">
          {sithRows}
        </ul>
        <div className="css-scroll-buttons">
          <button className={upClassName} disabled={upDisabled} onClick={(e) => this.handleScrollUp(e)}></button>
          <button className={downClassName} disabled={downDisabled} onClick={(e) => this.handleScrollDown(e)}></button>
        </div>      
      </section>
    );
  }
}

function getAppState(stateRef) {
  return { appState: stateRef.getValue() }
}

export default class DashboardApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState(this.props.stateRef);
  }
  render() {
    const appState=this.state.appState;
    return (
      <div className="app-container">
        <div className="css-root">
          <PlanetMonitor currentPlanet={appState.obiWanLocation} />
          <SithScrollableList appState={appState} refUpdater={this.props.refUpdater} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    const stateRef=this.props.stateRef;
    stateRef.on("change",() => { this._onChange(); });
  }
  componentWillUnmount() {
    const stateRef=this.props.stateRef;
    stateRef.removeListener("change",this._onChange);
  }
  /**
   * Event handler for 'change' events coming from the state
   */
  _onChange() {
    this.setState(getAppState(this.props.stateRef));
  }
}