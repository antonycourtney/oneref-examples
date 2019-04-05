import * as Immutable from 'immutable';
import * as DT from './dashboardTypes';
import { StateRef, StateTransformer, update, awaitableUpdate } from 'oneref';
import DashboardAppState from './dashboardAppState';

const sithUrl = (id: string) => `http://localhost:3000/dark-jedis/${id}`;

const updateObiWan = async (
    parsedLocation: any,
    stateRef: StateRef<DashboardAppState>
) => {
    const [nextSt, oldRequests] = await awaitableUpdate(stateRef, state => {
        const obiWanLocation = new DT.PlanetInfo(parsedLocation);
        const locState = state.set('obiWanLocation', obiWanLocation);
        return locState.checkMatchingSith();
    });
    cancelOldRequests(oldRequests);
    if (!nextSt.matchingSith()) {
        fillView(nextSt, stateRef);
    }
};

export const processObiWanUpdates = async (
    updateStream: AsyncIterable<any>,
    stateRef: StateRef<DashboardAppState>
): Promise<void> => {
    for await (const locJSON of updateStream) {
        updateObiWan(locJSON, stateRef);
    }
};

const cancelOldRequests = (oldRequests: AbortController[]) => {
    if (oldRequests.length > 0) {
        console.log('cancelling ', oldRequests.length, ' pending requests');
        oldRequests.forEach(req => req.abort());
    }
};

// Perform the actual fetch operation, await the results, and update state:
async function fetchSithInfo(
    sithId: number,
    signal: AbortSignal,
    stateRef: StateRef<DashboardAppState>
): Promise<void> {
    try {
        const response = await fetch(sithUrl(sithId.toString()), { signal });
        const parsedSithStatus = await response.json();
        const [nextSt, oldRequests] = await awaitableUpdate(
            stateRef,
            prevState => prevState.updateSithStatus(parsedSithStatus)
        );
        cancelOldRequests(oldRequests);
        fillView(nextSt, stateRef);
    } catch (err) {
        // request was aborted...ignore
        console.log(
            'caught abort fetching sith status for id ',
            sithId,
            ' (ignored)'
        );
    }
}

export function requestSithInfo(
    append: boolean,
    sithId: number,
    stateRef: StateRef<DashboardAppState>
): void {
    const controller = new AbortController();
    const signal = controller.signal;

    // fill in entry at pos indicating request for the given sith id,
    // and adding request to pending requestsById
    update(stateRef, st => st.addPendingRequest(append, sithId, controller));
    // And spawn the async fetch request; note that we don't await the result
    fetchSithInfo(sithId, signal, stateRef);
}

/*
 * fill view by generating more requests if necessary
 *
 */
export function fillView(
    st: DashboardAppState,
    stateRef: StateRef<DashboardAppState>
) {
    const lastSith = st.lastKnownSith();
    if (st.needsApprentice(lastSith)) {
        requestSithInfo(true, lastSith!.info.apprenticeId, stateRef);
    }
    const firstSith = st.firstKnownSith();
    if (st.needsMaster(firstSith)) {
        requestSithInfo(false, firstSith!.info.masterId, stateRef);
    }
}

export const scroll = async (
    scrollAmount: number,
    stateRef: StateRef<DashboardAppState>
): Promise<void> => {
    const [nextSt, oldRequests] = await awaitableUpdate(stateRef, st =>
        st.scrollAdjust(scrollAmount)
    );
    fillView(nextSt, stateRef);
};
