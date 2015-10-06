/**
 * Responses to user interaction
 *
 * Each action takes action-specific parameters and an updater callback to invoke with
 * a (TodoAppState) => TodoAppState update function
 */

'use strict';
import TodoItem from './todoItem';

export function create(text,updater) {
  updater((state) => state.addItem(new TodoItem(text)));
}

export function toggleComplete(item,updater) {
  const updatedItem = item.set('complete', !item.complete);
  updater((state) => state.addItem(updatedItem));
}

export function updateText(item,text,updater) {
  const updatedItem = item.set('text',text);
  updater((state) => state.addItem(updatedItem));
}

export function destroy(id,updater) {
  updater((state) => state.removeItem(id));
}

export function destroyCompleted(updater) {
  updater((state) => {
    const completedIds = state.getAll().filter((item) => item.complete).map((item) => item.id);
    return completedIds.reduce((s,id) => s.removeItem(id),state);
  });
}