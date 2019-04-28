/*
 * A mock implementation of an API to a remote storage
 * server for saving items updates
 */
import { utils as onerefUtils } from 'oneref';

const { delay } = onerefUtils;

const DELAY_TIME = 2000;

/**
 *
 * @param id id of item to save
 * @param name name of item to write
 */
let callCount = 0;
export const serverSave = async (
    id: number,
    name: string
): Promise<boolean> => {
    await delay(DELAY_TIME);
    // Let's fail every 3rd write
    const ret = callCount++ % 3 != 2;
    return ret;
};
