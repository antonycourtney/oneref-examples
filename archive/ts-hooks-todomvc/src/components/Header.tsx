/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React from 'react';
import TodoAppState from '../todoAppState';
import TodoTextInput from './TodoTextInput';
import * as actions from '../actions';
import {StateTransformer, StateSetter} from '../oneref';

interface HeaderProps {
  setState: StateSetter<TodoAppState>
}

const Header = ({ setState }: HeaderProps) => {

  const onSave = (text: string) => {
    if (text.trim()){
      setState(actions.create(text));
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
          className="new-todo"
          placeholder="What needs to be done?"
          onSave={onSave}
        />
    </header>
  )
}
export default Header;