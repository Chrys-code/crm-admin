import { Tracker, NewTracker } from './tracker.types';
import { request } from '../helpers';

// const baseUrl: string | undefined = process.env.API_BASE_URL;
// const url: string = `${baseUrl}/user`;

const url = 'http://localhost:8080/tracker';

export const createTrackerRequest = async (newTracker: NewTracker): Promise<Tracker> =>
    await request({
        url: url,
        method: 'POST',
        body: newTracker,
    });

export const getTrackerRequest = async (id: string): Promise<Tracker> =>
    await request({
        url: `${url}/${id}`,
        method: 'GET',
    });

export const getTrackersRequest = async (payload: string): Promise<Tracker[]> =>
    await request({
        url: `${url}/by-org-id?id=${payload}`,
        method: 'GET',
    });

export const updateTrackerRequest = async ({
    id,
    payload,
}: {
    id: string;
    payload: Tracker;
}): Promise<Tracker> =>
    await request({ url: `${url}?id=${id}`, method: 'PATCH', body: payload });

export const deleteTrackerRequest = async (payload: string): Promise<any> =>
    await request({ url: `${url}?id=${payload}`, method: 'DELETE' });
