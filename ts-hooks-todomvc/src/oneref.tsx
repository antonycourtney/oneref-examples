/*
 * Types and utilities for using the oneref pattern for state management 
 */

import * as React from 'react';
import { AssertionError } from 'assert';

export type StateTransformer<T> = (s: T) => T
export type StateSetter<T> = (st: StateTransformer<T>) => void
// type StateSetter<T> = React.Dispatch<React.SetStateAction<TodoAppState>>

export interface StateRefProps<S> {
    appState: S,
    setState: StateSetter<S>  
}

export const withOneRef = <AS extends {}, P extends {}>( s0: AS, Comp: React.ComponentType<P & StateRefProps<AS>>): React.FunctionComponent<P> => props => {
    const [appState, setState] = React.useState(s0);

    return (
        <Comp {...props} appState={appState} setState={setState} />
    );
}