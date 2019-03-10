import { Map, Record, Seq } from 'immutable';
import TodoItem from './todoItem';

interface AppStateProps {
    todoItems: Map<string, TodoItem>;
}

const defaultStateProps: AppStateProps = {
    todoItems: Map()
};

/**
 *
 * A purely functional (immutable) data structure for TODO list application state
 * (a collection of TodoItem)
 */
export default class TodoAppState extends Record(defaultStateProps) {
    /**
     * Add / update a TODO item
     *
     * functional item update -- returns a new state with the given item included in the
     * set of todo items.  If there is an existing entry for item.id, the result state
     * will map id to item (functional update).
     */
    addItem(item: TodoItem): TodoAppState {
        const nextTodoItems = this.todoItems.set(item.id, item);
        return this.set('todoItems', nextTodoItems);
    }

    /**
     * functional delete -- returns a new state with the item for the given id removed
     */
    removeItem(id: string): TodoAppState {
        const nextTodoItems = this.todoItems.delete(id);
        return this.set('todoItems', nextTodoItems);
    }

    /** An Immutable.Seq of all todo items */
    getAll(): Seq.Set<TodoItem> {
        return this.todoItems.toSetSeq();
    }

    /* returns true iff all items are complete */
    areAllComplete(): boolean {
        return this.todoItems.every(item => item.complete);
    }
}
