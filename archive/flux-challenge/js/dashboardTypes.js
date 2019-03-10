/**
 * Representation of status info for Jedi Dashboard app using Immutable.js
 */
'use strict';

import * as Immutable from 'immutable';

export const INVALID_ID = -1;

/**
 * Planet (as returned in Obi-Want status message)
 */
export const PlanetInfo = Immutable.Record({
  id: INVALID_ID,
  name: ""
});

/**
 * Detail information about a single Sith Lord (as returned from REST request)
 */
export const SithInfo = Immutable.Record({
  id: INVALID_ID,
  name: "",
  homeworld: null, // null or PlanetInfo
  masterId: INVALID_ID,
  apprenticeId: INVALID_ID
});

/**
 * A Sith row consists of a requested id plus possible SithInfo (filled in when request completes)
 */
export const SithRow = Immutable.Record({
  id: INVALID_ID, // requested Sith id
  info: null, // filled in with SithInfo
  request: null // XHR while request pending
})