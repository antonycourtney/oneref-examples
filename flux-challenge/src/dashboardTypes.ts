/**
 * Representation of status info for Jedi Dashboard app using Immutable.js
 */

import * as Immutable from 'immutable';

export const INVALID_ID = -1;

export interface PlanetInfoProps {
    id: number;
    name: string;
}

const defaultPlanetInfoProps: PlanetInfoProps = {
    id: INVALID_ID,
    name: ''
};

/**
 * Planet (as returned in Obi-Wan status message)
 */
export class PlanetInfo extends Immutable.Record(defaultPlanetInfoProps) {}

/**
 * Detail information about a single Sith Lord (as returned from REST request)
 */
interface SithInfoProps {
    id: number;
    name: string;
    homeworld: PlanetInfo | null;
    masterId: number;
    apprenticeId: number;
}

const defaultSithInfoProps: SithInfoProps = {
    id: INVALID_ID,
    name: '',
    homeworld: null,
    masterId: INVALID_ID,
    apprenticeId: INVALID_ID
};

export class SithInfo extends Immutable.Record(defaultSithInfoProps) {}

/**
 * A Sith row consists of a requested id plus possible SithInfo (filled in when request completes)
 */
interface SithRowProps {
    id: number; // requested Sith id
    info: SithInfo | null; // filled in with SithInfo
    request: AbortController | null; // AbortController while request pending
}

const defaultSithRowProps: SithRowProps = {
    id: INVALID_ID,
    info: null,
    request: null
};

export class SithRow extends Immutable.Record(defaultSithRowProps) {}
