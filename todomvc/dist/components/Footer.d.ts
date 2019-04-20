/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
/// <reference types="react" />
import TodoItem from '../todoItem';
import TodoAppState from '../todoAppState';
import { StateSetter } from 'oneref';
import { Seq } from 'immutable';
interface FooterProps {
    allTodos: Seq.Set<TodoItem>;
    nowShowing: string;
    setNowShowing: (ns: string) => void;
    setState: StateSetter<TodoAppState>;
}
declare const Footer: ({ allTodos, nowShowing, setState, setNowShowing }: FooterProps) => JSX.Element | null;
export default Footer;
