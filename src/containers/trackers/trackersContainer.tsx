import React, { FC, PropsWithChildren, useEffect } from 'react'
import { TrackersContainerProps } from './trackersContainer.types'
import Trackers from '../../features/analytics/trackers/trackers'
import { RootState, useAppSelector } from '../../store/store'
import { TrackerState } from '../../store/reducers/tracker/tracker.types'
import { UserState } from '../../store/reducers/user/user.types'

const TrackersContainer: FC<TrackersContainerProps> = ({ getTrackers }: PropsWithChildren<TrackersContainerProps>): JSX.Element => {

    const { trackers } = useAppSelector((state: RootState): TrackerState => state.tracker);

    const { organisation } = useAppSelector(
        (state: RootState): UserState => state.user
    );

    useEffect((): (() => void) | undefined => {
        if (!organisation) return;
        getStoreTrackers();
        return (): void => { }
    }, [organisation])


    async function getStoreTrackers() {
        await getTrackers();
    }

    return <Trackers trackers={trackers} />

}
export default TrackersContainer