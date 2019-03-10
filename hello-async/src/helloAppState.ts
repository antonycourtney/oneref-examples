import * as Immutable from 'immutable';
import Notification from './notification';

interface AppStateProps {
    notifications: Immutable.List<Notification>;
}

const defaultAppStateProps: AppStateProps = {
    notifications: Immutable.List()
};

export default class helloAppState extends Immutable.Record(
    defaultAppStateProps
) {
    show(text: string): [this, number] {
        const n = new Notification(text);

        return [this.set('notifications', this.notifications.push(n)), n.id];
    }

    hide(id: number): this {
        return this.set(
            'notifications',
            this.notifications.filter(n => n.id !== id)
        );
    }
}
