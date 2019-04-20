import * as Immutable from 'immutable';

const INVALID_ID = -1;

interface notificationProps {
    id: number;
    text: string;
}

const defaultNotificationProps: notificationProps = {
    id: INVALID_ID,
    text: ''
};

let nextNotificationId = 0;

export default class Notification extends Immutable.Record(
    defaultNotificationProps
) {
    constructor(text: string) {
        super({ id: nextNotificationId++, text });
    }
}
