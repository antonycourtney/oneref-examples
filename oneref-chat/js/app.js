'use strict';

import * as React from 'react';
import * as OneRef from 'oneref';
import * as ChatExampleData from './ChatExampleData';
import * as ChatWebAPIUtils from './utils/ChatWebAPIUtils';
import ThreadStore from './ThreadStore';
import ChatApp from './components/ChatApp.react';

ChatExampleData.init();

// Seq of Message objects from storage
const baseMessages = ChatWebAPIUtils.getAllMessages();
const initialThreadStore = baseMessages.reduce((ts,msg) => ts.addMessage(msg),new ThreadStore());
const initReadTS = initialThreadStore.markRead(initialThreadStore.currentThreadID);
const storeRef = new OneRef.Ref(initReadTS);

const storeRefUpdater = OneRef.refUpdater(storeRef);

React.render(
  <ChatApp storeRef={storeRef} storeRefUpdater={storeRefUpdater} />,
  document.getElementById('react')
);