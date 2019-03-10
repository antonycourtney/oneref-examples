/*
 * A simulated service providing Todo list entries
 *
 */
import { utils as onerefUtils } from 'oneref';

const { delay } = onerefUtils;

type TodoListener = (entry: string) => void;

let entries = [
    'buy milk',
    'call the doctor',
    'pay rent',
    'get wedding present'
];

const INTERVAL = 2000;

const postEntry = (subState: string[], listener: TodoListener) => {
    const entry = subState.pop();
    if (entry) {
        listener(entry);
    }
    if (subState.length > 0) {
        setTimeout(() => postEntry(subState, listener), INTERVAL);
    }
};

export const subscribe = (listener: TodoListener) => {
    // initialize subscription state from entries:
    const subState = entries.slice(0);
    setTimeout(() => postEntry(subState, listener), INTERVAL);
};
