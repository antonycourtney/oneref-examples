import TodoItem from './todoItem';
import TodoAppState from './todoAppState';
import { StateTransformer } from 'oneref';

export const create = (text: string): StateTransformer<TodoAppState> => state =>
    state.addItem(new TodoItem(text));

export const clearCompleted: StateTransformer<TodoAppState> = state => {
    const completedIds = state
        .getAll()
        .filter(item => item.complete)
        .map(item => item.id);
    return completedIds.reduce((s, id) => s.removeItem(id), state);
};

export const updateText = (
    item: TodoItem,
    text: string
): StateTransformer<TodoAppState> => state =>
    state.addItem(item.set('text', text));

export const toggleComplete = (
    item: TodoItem
): StateTransformer<TodoAppState> => state =>
    state.addItem(item.set('complete', !item.complete));

export const toggleCompleteAll: StateTransformer<TodoAppState> = state => {
    const targetVal = !state.areAllComplete();
    // We'll set completed state of all items to targetVal:
    const updItems = state
        .getAll()
        .map(item => item.set('complete', targetVal));
    const nextState = updItems.reduce((st, item) => st.addItem(item), state);
    return nextState;
};

export const destroy = (id: string): StateTransformer<TodoAppState> => state =>
    state.removeItem(id);
