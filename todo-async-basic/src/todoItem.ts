/**
 * Representation of TODO items using Immutable.js
 */

import { Record } from 'immutable';

interface ItemProps {
    id: string;
    complete: boolean;
    text: string;
}

const defaultItemProps: ItemProps = {
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
export default class TodoItem extends Record(defaultItemProps) {
    constructor(text: string, complete = false) {
        super({ id: genID(), text, complete });
    }
}
