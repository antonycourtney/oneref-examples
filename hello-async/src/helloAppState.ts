import * as Immutable from 'immutable';
import Notification from './notification';

interface AppStateProps {
    nextId: number;
    notifications: Immutable.List<Notification>;
}

const defaultAppStateProps: AppStateProps = {
    nextId: 0,
    notifications: Immutable.List()
};

export default class helloAppState extends Immutable.Record(
    defaultAppStateProps
) {
    show(text: string): [this, number] {
        const n = new Notification(this.nextId, text);

        const nextSt = this.set(
            'notifications',
            this.notifications.push(n)
        ).set('nextId', this.nextId + 1);
        return [nextSt, n.id];
    }

    hide(id: number): this {
        return this.set(
            'notifications',
            this.notifications.filter(n => n.id !== id)
        );
    }
}
