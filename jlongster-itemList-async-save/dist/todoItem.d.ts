/**
 * Representation of TODO items using Immutable.js
 */
declare const TodoItem_base: any;
/**
 * An individual item in the TODO list as an Immutable record
 */
export default class TodoItem extends TodoItem_base {
    constructor(text: string, complete?: boolean);
}
export {};
