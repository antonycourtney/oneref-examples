/**
 * Immutable representation of a collection of message threads (conversations)
 */
'use strict';

import * as Immutable from 'immutable';
import Message from './Message';
import Thread from './Thread';

const emptyThread = new Thread();

/**
 * A collection of message threads
 *
 * Each thread id maps to a Thread (a collection of Message) 
 */
export default class ThreadStore extends Immutable.Record({
  threadIdMap: Immutable.Map(),  // map from thread id to Thread
  currentThreadID: null
}) {
  /**
   * add or update a single message
   * functional API - returns an updated ThreadStore
   */
  addMessage(message) {
    // curConvo is state of the conversation for this thread before adding
    // message
    const curConvo = this.threadIdMap.get(message.threadID,emptyThread);
    // nextConvo is state of conversation after adding message
    const nextConvo = curConvo.addMessage(message);
    const nextThreadIdMap = this.threadIdMap.set(message.threadID,nextConvo);
    const nextCurrentID = this.currentThreadID ? this.currentThreadID : message.threadID;
    return this.set('threadIdMap',nextThreadIdMap).set('currentThreadID',nextCurrentID);
  }

  /**
   * mark the specified thread ID as read
   */
  markRead(threadID) {
    const curConvo = this.threadIdMap.get(threadID,emptyThread);
    const nextConvo = curConvo.markRead()
    const nextThreadIdMap = this.threadIdMap.set(threadID,nextConvo);
    return this.set('threadIdMap',nextThreadIdMap);    
  }

  /**
   * set the current Thread ID and mark thread as read
   */
  setCurrentThread(threadID) {
    return this.set('currentThreadID',threadID).markRead(threadID);
  }

  /**
   * get the Thread for the currentThreadID
   */
  getCurrentThread() {
    return this.threadIdMap.get(this.currentThreadID);
  }

  /**
   * get an array of all message threads, in chronological order
   */
  getAllChrono() {
    return this.threadIdMap.toIndexedSeq().toArray();
  }

  get unreadCount() {
    return this.threadIdMap.count((t) => !t.isRead);
  }
}