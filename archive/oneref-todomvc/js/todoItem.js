/**
 * Representation of TODO items using Immutable.js
 */
'use strict';

import * as Immutable from 'immutable';


/* auxiliary function to generate a fresh id */
function genID() { 
  return (+new Date() + Math.floor(Math.random() * 999999)).toString(36); 
}

/**
 * An individual item in the TODO list as an Immutable record
 */
export default class TodoItem extends Immutable.Record({
  id: '',
  complete: false,
  text: ''
}) {
  constructor(text,complete = false) {
    super({id: genID(), text, complete});
  }
}