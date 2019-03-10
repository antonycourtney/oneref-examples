var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Map, Record } from 'immutable';
var defaultStateProps = {
    todoItems: Map()
};
/**
 *
 * A purely functional (immutable) data structure for TODO list application state
 * (a collection of TodoItem)
 */
var TodoAppState = /** @class */ (function (_super) {
    __extends(TodoAppState, _super);
    function TodoAppState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Add / update a TODO item
     *
     * functional item update -- returns a new state with the given item included in the
     * set of todo items.  If there is an existing entry for item.id, the result state
     * will map id to item (functional update).
     */
    TodoAppState.prototype.addItem = function (item) {
        var nextTodoItems = this.todoItems.set(item.id, item);
        return this.set('todoItems', nextTodoItems);
    };
    /**
     * functional delete -- returns a new state with the item for the given id removed
     */
    TodoAppState.prototype.removeItem = function (id) {
        var nextTodoItems = this.todoItems.delete(id);
        return this.set('todoItems', nextTodoItems);
    };
    /** An Immutable.Seq of all todo items */
    TodoAppState.prototype.getAll = function () {
        return this.todoItems.toSetSeq();
    };
    /* returns true iff all items are complete */
    TodoAppState.prototype.areAllComplete = function () {
        return this.todoItems.every(function (item) { return item.complete; });
    };
    return TodoAppState;
}(Record(defaultStateProps)));
export default TodoAppState;
