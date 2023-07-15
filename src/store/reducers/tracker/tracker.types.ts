import { Tracker, TrackerSerializedById } from '../../apis/tracker/tracker.types';

export interface TrackerState {
    trackers: Tracker[];
    trackersById: TrackerSerializedById;
    currentTracker: StoreTracker;
}

export interface StoreTracker {
    _id: string | null;
    title: string | null;
    keyword: string | null;
    description: string | null;
    organisation: string | null;
}
