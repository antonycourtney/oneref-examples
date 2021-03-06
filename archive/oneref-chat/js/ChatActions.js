/**
 * Responses to user interaction
 *
 * Each action takes action-specific parameters and an updater callback to invoke with
 * a (ChatAppState) => ChatAppState update function
 */
import * as ChatWebAPIUtils from './utils/ChatWebAPIUtils';
import * as ChatMessageUtils from './utils/ChatMessageUtils';
import Message from './Message';

'use strict';

export function clickThread(threadID,updater) {
  updater((state) => state.setCurrentThread(threadID))
}

export function createMessage(text,threadID,threadName,updater) {
  var message = ChatMessageUtils.getCreatedMessageData(text,threadID);
  ChatWebAPIUtils.createMessage(message,threadName,(rawMessage) => {
    const convMessage = ChatMessageUtils.convertRawMessage(rawMessage,threadID);
    const message = new Message(convMessage);
    updater((state) => state.addMessage(message));
  });
}