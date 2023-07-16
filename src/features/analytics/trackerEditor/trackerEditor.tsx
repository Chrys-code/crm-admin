import React, { FC, PropsWithChildren, useEffect, useState, ChangeEvent } from 'react'
import { TrackerEditorProps } from './trackerEditor.types'
import Section from '../../../layout/section/section'
import { InputLabel, TrackerContentWrapper, TrackerInputField } from './trackerEditor.styles'
import { RootState, useAppSelector } from '../../../store/store'
import { TrackerState } from '../../../store/reducers/tracker/tracker.types'
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom'
import { Tracker } from '../../../store/apis/tracker/tracker.types'
import { useDebounce } from '../../../utils/hooks'
import { useDispatch } from 'react-redux'
import { actions as trackerActions } from '../../../store/reducers/tracker';


const TrackerEditor: FC<TrackerEditorProps> = ({ }: PropsWithChildren<TrackerEditorProps>): JSX.Element => {

    const dispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();
    const { id } = useParams();


    const { trackersById } = useAppSelector(
        (state: RootState): TrackerState => state.tracker
    );


    const [selectedTracker, setSelectedTracker] = useState<Tracker | null>(null);
    const [title, setTitle] = useState<string | null>(null);
    const [keyword, setKeyword] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);


    useEffect((): (() => void) => {
        if (!Object.keys(trackersById).length && location.pathname.includes('id')) navigate('/email-templates/');
        return (): void => { };
    }, [trackersById]);

    useEffect((): (() => void) | undefined => {
        if (!id || !trackersById) return;
        const objId: string = id.split('=')[1];
        setSelectedTracker(trackersById[objId]);
        return (): void => { };
    }, [id, trackersById]);

    useEffect((): (() => void) | undefined => {
        if (!selectedTracker) return;
        setTitle(selectedTracker.title)
        setKeyword(selectedTracker.keyword)
        setDescription(selectedTracker.description)
        dispatch(trackerActions.setCurrentTrackerId(selectedTracker._id))
        return (): void => { }
    }, [selectedTracker])


    useDebounce(
        () => dispatch(trackerActions.setCurrentTrackerTitle(title)),
        600,
        [title]
    );
    useDebounce(
        () => dispatch(trackerActions.setCurrentTrackerKeyword(keyword)),
        600,
        [keyword]
    );
    useDebounce(
        () => dispatch(trackerActions.setCurrentTrackerDescription(description)),
        600,
        [description]
    );


    return (
        <Section withBorder withPadding>
            <TrackerContentWrapper>
                <Section type='div' >
                    <InputLabel htmlFor='tracker_title'>Title:</InputLabel>
                    <TrackerInputField
                        id="tracker_title"
                        name="tracker_title"
                        type='text'
                        placeholder='Display name of the tracker'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        value={title ? title : ''}
                    ></TrackerInputField>
                </Section>
                <Section type='div'>
                    <InputLabel htmlFor='tracker_keyword'>Keyword:</InputLabel>
                    <TrackerInputField
                        id="tracker_keyword"
                        name="tracker_keyword"
                        type='text'
                        placeholder='E.g.: "my_first_tracker"'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)}
                        value={keyword ? keyword : ''}
                    ></TrackerInputField>
                </Section>
                <Section type='div'>
                    <InputLabel htmlFor='description'>Description:</InputLabel>
                    <TrackerInputField
                        id="tracker_description"
                        name="tracker_description"
                        type='text'
                        placeholder='Info about the purpose of the tracker'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)
                        }
                        value={description ? description : ''}
                    ></TrackerInputField>
                </Section>
            </TrackerContentWrapper>
        </Section>
    )
}
export default TrackerEditor