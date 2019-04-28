/**
 * Representation of TODO items using Immutable.js
 */
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
import { Record } from 'immutable';
var defaultItemProps = {
    id: '',
    complete: false,
    text: ''
};
/* auxiliary function to generate a fresh id */
function genID() {
    return (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
}
/**
 * An individual item in the TODO list as an Immutable record
 */
var TodoItem = /** @class */ (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem(text, complete) {
        if (complete === void 0) { complete = false; }
        return _super.call(this, { id: genID(), text: text, complete: complete }) || this;
    }
    return TodoItem;
}(Record(defaultItemProps)));
export default TodoItem;
