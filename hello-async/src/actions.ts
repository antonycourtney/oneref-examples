import {
    StateRef,
    update,
    awaitableUpdate,
    utils as oneRefUtils
} from 'oneref';
import HelloAppState from './helloAppState';

const delay = oneRefUtils.delay;

export async function showNotificationWithTimeout(
    stateRef: StateRef<HelloAppState>,
    text: string
): Promise<void> {
    const [_, id] = await awaitableUpdate(stateRef, st => st.show(text));
    await delay(5000);
    update(stateRef, st => st.hide(id));
}
