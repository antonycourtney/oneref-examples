'use strict';

import * as Immutable from 'immutable';
import Message from './Message';

/**
 * Contents of a single conversation (message thread) sharing a common thread ID
 *
 * We use a SortedMap and add messages in chronological order
 */
export default class Thread extends Immutable.Record({
  messageIdMap: Immutable.OrderedMap() // map from id to Message, ordered by date
}) {
  /*
   * add or update the message by its message id
   *
   * pre: (!this.lastMessage) ||
   *      (message.date > this.lastMessage.date &&
   *       message.threadID === this.lastMessage.threadID)
   */
  addMessage(message) {
    const nextIdMap = this.messageIdMap.set(message.id,message);
    return this.set('messageIdMap',nextIdMap);
  }

  /**
   * mark this thread as read (by marking last message as read)
   */
  markRead() {
    const lastMessage = this.lastMessage;
    if (!lastMessage)
      return this;
    const updMessage = lastMessage.set('isRead',true);
    return this.addMessage(updMessage);
  }

  getMessages() {
    return this.messageIdMap.toIndexedSeq().toArray();
  }

  get lastMessage() {
    return this.messageIdMap.last();
  }

  get firstMessage() {
    return this.messageIdMap.first();
  }

  get name() {
    return this.firstMessage.threadName;
  }
  
  get id() {
    return this.firstMessage.threadID;
  }

  get isRead() {
    return this.lastMessage.isRead;
  }
}