import {
    generateReauthenticatingThunkApiAction,
} from '../../helpers';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../../store';
import { TrackerState } from './tracker.types';
import { Tracker, TrackerSerializedById } from '../../apis/tracker/tracker.types';
import { createTrackerRequest, getTrackersRequest, updateTrackerRequest } from '../../apis/tracker';
import { serializeItemsById } from '../../serializers';

const initialState: TrackerState = {
    trackers: [],
    trackersById: {},
    currentTracker: {
        _id: null,
        title: null,
        keyword: null,
        description: null,
        organisation: null,
    },
};

const getTrackers = createAsyncThunk<
    Tracker[],
    null,
    {
        dispatch: AppDispatch;
        state: RootState;
    }
>(
    'tracker/getTrackers',
    generateReauthenticatingThunkApiAction(
        async (state: RootState): Promise<Tracker[] | null> => {
            const trackers: Tracker[] = await getTrackersRequest(state.user.organisation!);
            return trackers;
        }
    )
);

const createTracker = createAsyncThunk<
    Tracker,
    null,
    {
        dispatch: AppDispatch;
        state: RootState;
    }
>(
    'tracker/createTracker',
    generateReauthenticatingThunkApiAction(
        async (state: RootState): Promise<Tracker> => {
            const tracker: Tracker = await createTrackerRequest(state.tracker.currentTracker);
            return tracker;
        }
    )
);
const updateTracker = createAsyncThunk<
    Tracker,
    null,
    {
        dispatch: AppDispatch;
        state: RootState;
    }
>(
    'tracker/updateTracker',
    generateReauthenticatingThunkApiAction(
        async (state: RootState): Promise<void> => {
            const tracker: Tracker = await updateTrackerRequest({
                id: state.tracker.currentTracker._id as string,
                payload: state.tracker.currentTracker as Tracker,
            });
        }
    )
);

const tracker = createSlice({
    name: 'tracker',
    initialState,
    reducers: {
        setCurrentTrackerId(state, { payload }) {
            state.currentTracker._id = payload;
        },
        setCurrentTrackerOrganisation(state, { payload }) {
            state.currentTracker.organisation = payload;
        },
        setCurrentTrackerTitle(state, { payload }) {
            state.currentTracker.title = payload;
        },
        setCurrentTrackerKeyword(state, { payload }) {
            state.currentTracker.keyword = payload;
        },
        setCurrentTrackerDescription(state, { payload }) {
            state.currentTracker.description = payload;
        },
        clearCurrentTracker(state) {
            state.currentTracker._id = null;
            state.currentTracker.title = null;
            state.currentTracker.keyword = null;
            state.currentTracker.description = null;
        },
    },
    extraReducers: (builder): void => {
        builder.addCase(getTrackers.fulfilled, (state, { payload }): void => {
            state.trackers = payload;
            state.trackersById = serializeItemsById(payload) as TrackerSerializedById;
        });
        builder.addCase(createTracker.fulfilled, (state, { payload }): void => {
            state.trackers = [...state.trackers, payload];
        });
    },
});

const userReducer = tracker.reducer;
export default userReducer;
export const actions = {
    ...tracker.actions,
    getTrackers,
    createTracker,
    updateTracker,
};
