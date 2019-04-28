/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import React from 'react';
var ENTER_KEY_CODE = 13;
var TodoTextInput = function (props) {
    var _a = React.useState(props.value || ''), value = _a[0], setValue = _a[1];
    var save = function () {
        props.onSave(value);
        setValue('');
    };
    var onKeyDown = function (e) {
        if (e.keyCode === ENTER_KEY_CODE) {
            save();
        }
    };
    var className = props.className || '';
    return (React.createElement("input", { className: className, id: props.id, placeholder: props.placeholder, onBlur: save, onChange: function (e) { return setValue(e.target.value); }, onKeyDown: onKeyDown, value: value, autoFocus: true }));
};
export default TodoTextInput;
