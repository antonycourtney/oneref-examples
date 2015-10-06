'use strict';

import * as Immutable from 'immutable';
import TodoItem from './todoItem';

/**
 * 
 * A purely functional (immutable) data structure for TODO list application state
 * (a collection of TodoItem)
 */
export default class TodoAppState extends Immutable.Record({
  todoItems: Immutable.Map()  // map from id to TodoItem
}) {
  /**
   * Add / update a TODO item
   *
   * functional item update -- returns a new state with the given item included in the
   * set of todo items.
   *
   * If item.id was not previously in the state, the result state will include the item.
   * If there was a previous entry for item.id in the state, the result state will map id 
   * to item.
   */
  addItem(item) {
    const nextTodoItems = this.todoItems.set(item.id,item);
    return this.set('todoItems',nextTodoItems);
  }

  /**
   * functional delete -- returns a new state with the item for the given id removed
   */
  removeItem(id) {
    const nextTodoItems = this.todoItems.delete(id);
    return this.set('todoItems',nextTodoItems);
  }

  /** An Immutable.Seq of all todo items */
  getAll() {
    return this.todoItems.toSetSeq();
  }

  /* returns true iff all items are complete */
  areAllComplete() {
    return this.todoItems.every((item) => item.complete);
  }
}