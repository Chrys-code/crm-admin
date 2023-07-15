export interface Tracker {
    _id: string;
    title: string;
    keyword: string;
    description: string;
    organisation: string;
}

export interface NewTracker {
    title: string | null;
    keyword: string | null;
    description: string | null;
    organisation: string | null;
}

export interface TrackerSerializedById {
    [key: string]: {
        _id: string;
        title: string;
        keyword: string;
        description: string;
        organisation: string;
    };
}

