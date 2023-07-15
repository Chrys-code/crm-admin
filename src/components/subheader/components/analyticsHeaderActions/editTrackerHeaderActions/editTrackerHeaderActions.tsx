import React, { FC, PropsWithChildren } from 'react'
import { EditTrackerHeaderActionsProps } from './editTrackerHeaderActions.types'
import Button from '../../../../base/button'
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppSelector } from '../../../../../store/store';
import { TrackerState } from '../../../../../store/reducers/tracker/tracker.types';
import { toast } from 'react-toastify';

const EditTrackerHeaderActions: FC<EditTrackerHeaderActionsProps> = ({ getTrackers, createTracker, updateTracker, clearCurrentTracker }: PropsWithChildren<EditTrackerHeaderActionsProps>): JSX.Element => {

    const { id } = useParams();
    const navigate: NavigateFunction = useNavigate();

    const { currentTracker } = useAppSelector((state: RootState): TrackerState => state.tracker);

    async function handleSave() {
        if (currentTracker?._id) {
            await updateTracker();
        } else {
            await createTracker();
        }
        await getTrackers();
        await clearCurrentTracker();
        toast.success('Template Saved!');
        navigate('/analytics');
    }

    const buttonText: string = id ? "Update" : "Save"

    return <Button onClick={handleSave}>{buttonText}</Button>
}
export default EditTrackerHeaderActions