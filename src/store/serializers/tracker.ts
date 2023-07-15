import { Tracker, TrackerSerializedById } from '../apis/tracker/tracker.types';

export const serializeTracker = (tracker: Tracker): TrackerSerializedById => {
    return {
        [tracker._id]: {
            ...tracker,
        },
    };
};

export const serializeTrackers = (
    trackers: Tracker[] | null
): TrackerSerializedById => {
    let serializedTrackers: TrackerSerializedById = {};

    if (trackers && trackers.length) {
        trackers.forEach(
            (tracker: Tracker) => (serializedTrackers[tracker._id] = { ...tracker })
        );
    }

    return serializedTrackers;
};
