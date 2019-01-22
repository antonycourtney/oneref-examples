/*
 * Types and utilities for using the oneref pattern for state management 
 */

export type StateTransformer<T> = (s: T) => T
export type StateSetter<T> = (st: StateTransformer<T>) => void
// type StateSetter<T> = React.Dispatch<React.SetStateAction<TodoAppState>>
