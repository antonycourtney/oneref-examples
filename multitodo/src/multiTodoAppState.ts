import { Record } from 'immutable';
import TodoAppState from './todoAppState';

interface MultiAppStateProps {
    work: TodoAppState;
    personal: TodoAppState;
}

const defaultStateProps: MultiAppStateProps = {
    work: new TodoAppState(),
    personal: new TodoAppState()
};

/**
 *  work and personal Todos, as fields in a record
 */
export default class MultiTodoAppState extends Record(defaultStateProps) {}
