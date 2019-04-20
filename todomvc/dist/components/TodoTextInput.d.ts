/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
/// <reference types="react" />
interface InputProps {
    className?: string;
    id?: string;
    placeholder?: string;
    value?: string;
    onSave: (s: string) => void;
}
declare const TodoTextInput: (props: InputProps) => JSX.Element;
export default TodoTextInput;
