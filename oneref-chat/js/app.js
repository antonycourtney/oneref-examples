'use strict';

import * as React from 'react';
import * as OneRef from 'oneref';
import * as ChatExampleData from './ChatExampleData';
import * as ChatWebAPIUtils from './utils/ChatWebAPIUtils';
import ChatAppState from './ChatAppState';
import ChatApp from './components/ChatApp.react';

ChatExampleData.init();

// Seq of Message objects from storage
const baseMessages = ChatWebAPIUtils.getAllMessages();
const baseState = baseMessages.reduce((ts,msg) => ts.addMessage(msg),new ChatAppState());
const initialState = baseState.markRead(baseState.currentThreadID);
const stateRef = new OneRef.Ref(initialState);

React.render(
  <OneRef.AppContainer appClass={ChatApp} stateRef={stateRef} />,
  document.getElementById('react')
);