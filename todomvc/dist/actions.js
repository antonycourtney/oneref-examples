import TodoItem from './todoItem';
export var create = function (text) {
    return function (state) { return state.addItem(new TodoItem(text)); };
};
export var clearCompleted = function (state) {
    var completedIds = state.getAll().filter(function (item) { return item.complete; }).map(function (item) { return item.id; });
    return completedIds.reduce(function (s, id) { return s.removeItem(id); }, state);
};
export var updateText = function (item, text) {
    return function (state) { return state.addItem(item.set('text', text)); };
};
export var toggleComplete = function (item) {
    return function (state) { return state.addItem(item.set('complete', !item.complete)); };
};
export var toggleCompleteAll = function (state) {
    var targetVal = !(state.areAllComplete());
    // We'll set completed state of all items to targetVal:
    var updItems = state.getAll().map(function (item) { return item.set('complete', targetVal); });
    var nextState = updItems.reduce(function (st, item) { return st.addItem(item); }, state);
    return nextState;
};
export var destroy = function (id) {
    return function (state) { return state.removeItem(id); };
};
