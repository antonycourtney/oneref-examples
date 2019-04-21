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

export default class Notification extends Immutable.Record(
    defaultNotificationProps
) {
    constructor(id: number, text: string) {
        super({ id, text });
    }
}
