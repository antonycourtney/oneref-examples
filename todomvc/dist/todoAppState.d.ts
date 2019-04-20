import { Seq } from 'immutable';
import TodoItem from './todoItem';
declare const TodoAppState_base: any;
/**
 *
 * A purely functional (immutable) data structure for TODO list application state
 * (a collection of TodoItem)
 */
export default class TodoAppState extends TodoAppState_base {
    /**
     * Add / update a TODO item
     *
     * functional item update -- returns a new state with the given item included in the
     * set of todo items.  If there is an existing entry for item.id, the result state
     * will map id to item (functional update).
     */
    addItem(item: TodoItem): TodoAppState;
    /**
     * functional delete -- returns a new state with the item for the given id removed
     */
    removeItem(id: string): TodoAppState;
    /** An Immutable.Seq of all todo items */
    getAll(): Seq.Set<TodoItem>;
    areAllComplete(): boolean;
}
export {};
