/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React from 'react';

const ENTER_KEY_CODE = 13;

interface InputProps {
  className?: string
  id?: string
  placeholder?: string
  value?: string
  onSave: (s: string) => void
}

const TodoTextInput = (props: InputProps) => {
  const [value, setValue] = React.useState(props.value || '');

  const save = () => {
    props.onSave(value);
    setValue('');
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      save();
    }
  }

  const className = props.className || '';

  return (
    <input
      className={className}
      id={props.id}
      placeholder={props.placeholder}
      onBlur={save}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={onKeyDown}
      value={value}
      autoFocus={true}
    />
  );
}
export default TodoTextInput;
