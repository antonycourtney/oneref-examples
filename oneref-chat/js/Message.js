'use strict';


import * as Immutable from 'immutable';

/**
 * A chat message as an Immutable record
 */
const Message = Immutable.Record({
  id: '',
  threadID: '',
  threadName: '',
  authorName: '',
  text: '',
  date: new Date(),
  isRead: false 
});

export default Message;
