'use strict';
 import * as Immutable from 'immutable';
 import * as DT from './dashboardTypes';

export const VIEWPORT_SIZE = 5;
export const SCROLL_ROWS = 2;

/**
 * Dashboard application state as an Immutable record
 */
export default class AppState extends Immutable.Record({
  obiWanLocation: null,      // null or DT.PlanetInfo()
  sithList: Immutable.List() // of DT.SithRow | null, fixed size (VIEWPORT_SIZE)
}) {
  constructor() {
    super({ sithList: Immutable.Repeat(null,VIEWPORT_SIZE).toList() });
  }

  /**
   * handle a response to a pending request update to sith status
   *
   * @return {AppState} -- app state with the status of the sith with 
   */
  updateSithStatus(pstat) {
    const idx = this.sithList.findIndex((entry) => entry && entry.id === pstat.id);
    if (idx===-1)
      return this; // id has been scrolled out of view
    const sithInfo = new DT.SithInfo({id : pstat.id, name: pstat.name, homeworld: new DT.PlanetInfo(pstat.homeworld), 
                                      masterId: pstat.master ? pstat.master.id : null, 
                                      apprenticeId: pstat.apprentice ? pstat.apprentice.id : null});
    const updRow = this.sithList.get(idx).set('info',sithInfo).set('request',null);
    const updList = this.sithList.set(idx,updRow);
    return this.set('sithList',updList);
  }

  lastKnownSith() {
    const index = this.sithList.findLastIndex((v) => v !== null && v.info);
    if (index===-1)
      return null;
    const lastRow = this.sithList.get(index);
    return { index, info: lastRow.info};
  }

  firstKnownSith() {
    const index = this.sithList.findIndex((v) => v !== null && v.info);
    if (index===-1)
      return null;
    const firstRow = this.sithList.get(index);
    return { index, info: firstRow.info};
  }

  /**
   * Should we fetch apprentice information for the given sith row?
   *
   * @param {RowInfo} ri - row info as returned from lastKnownSith
   */
  needsApprentice(ri) {
    if (!ri)
      return false;
    const apprenticeId = ri.info.apprenticeId;
    return (apprenticeId && (ri.index+1 < 5) && this.emptyRow(ri.index+1));
  }

  needsMaster(ri) {
    if (!ri)
      return false;
    const masterId = ri.info.masterId;
    return (masterId && (ri.index > 0) && this.emptyRow(ri.index-1));
  }

  canScrollDown() {
    const ri = this.lastKnownSith();
    return (ri && ri.info.apprenticeId !== null 
      && this.bottomEmptyCount() < (VIEWPORT_SIZE-SCROLL_ROWS) 
      && !(this.matchingSith()));
  }

  canScrollUp() {
    const ri = this.firstKnownSith();
    return (ri && ri.info.masterId !== null 
      && this.topEmptyCount() < (VIEWPORT_SIZE-SCROLL_ROWS)
      && !(this.matchingSith()));
  }

  /**
   * Update sithList to indicate pending request
   */
  addPendingRequest(append,sithId,xhr) {
    var pos;
    if (append) {
      pos = this.sithList.findLastIndex((r) => r && r.info) + 1;
    } else {
      pos = this.sithList.findIndex((r) => r && r.info) - 1;
      if (pos < 0) {
        // shouldn't happen
        console.error("addPendingRequest: request to prepend before index 0 -- dropping", sithId);
        return this;
      }      
    }
    const sithRow = new DT.SithRow({id: sithId, request: xhr});
    const updSithList = this.sithList.set(pos,sithRow);
    return this.set('sithList',updSithList);
  }

  /**
   * returns true iff the slot at index idx is empty
   * Note: row with pending request will not be considered empty
   */
  emptyRow(idx) {
    const entry = this.sithList.get(idx);
    return !entry;
  }

  topEmptyCount() {
    const empties = this.sithList.takeWhile((e) => e===null);
    return empties.count();  
  }

  bottomEmptyCount() {
    const empties = this.sithList.reverse().takeWhile((e) => e===null);
    return empties.count();  
  }

  // returns true if there is a sith in sithList whose home planet matches
  // obiWanLocation
  matchingSith() {
    return this.sithList.some((r) => r && r.info && r.info.homeworld.id === this.obiWanLocation.id);
  }

  /**
   * Clear any rows with pendings requests
   *
   * @return {{nextState: AppState, oldRequests: List<XHR> }}
   */
  clearPendingRequests() {
    const isPending = (r) => r!==null && r.request!==null;
    const pendingRows = this.sithList.filter(isPending);
    const oldRequests = pendingRows.map((r) => r.request);
    const nextList = this.sithList.map((r) => isPending(r) ? null : r);
    const nextState = this.set('sithList',nextList);
    return { nextState, oldRequests };
  }

  /** 
   * adjust scroll position by specified amount
   * returns: { nextState: AppState, oldRequests: List<XHR> }
   */
  scrollAdjust(delta) {
    const offset = -1 * delta;
    var updList, droppedRows;
    if (offset >= 0) {
      // scrolling up, just prepend offset nulls to head of list:
      const filler = Immutable.Repeat(null, offset).toList();
      droppedRows = this.sithList.takeLast(offset);
      updList = filler.concat(this.sithList).take(VIEWPORT_SIZE);
    } else {
      // just slice off the right number of elements to shift them up:
      droppedRows = this.sithList.take(delta);
      const headElems = this.sithList.slice(delta);
      // and pad out with nulls:
      updList = headElems.concat(Immutable.Repeat(null,delta).toList());
    }
    const oldRequests = droppedRows.filter((r) => r!==null && r.request!==null).map((r) => r.request);
    const nextState = this.set('sithList',updList);
    return {nextState,oldRequests};
  }
};