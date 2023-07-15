import React, { FC, PropsWithChildren } from 'react'
import { TrackerSelector, TrackerTitle, TrackersContainer } from './trackers.styles'
import { TrackersProps } from './trackers.types'
import Section from '../../../layout/section/section'

const Trackers: FC<TrackersProps> = ({ }: PropsWithChildren<TrackersProps>): JSX.Element => {

    return (
        <TrackersContainer>
            <Section type='div'>
                <Section withPadding withBorder >
                    <TrackerTitle>Visitor Count</TrackerTitle>
                    <TrackerSelector type='checkbox' />
                </Section>
                <Section withPadding withBorder >
                    <TrackerTitle>Debounce Count</TrackerTitle>
                    <TrackerSelector type='checkbox' />
                </Section>
                <Section withPadding withBorder >
                    <TrackerTitle>Average Time</TrackerTitle>
                    <TrackerSelector type='checkbox' />
                </Section>
            </Section>
            <Section label='Trackers' withPadding withBorder>

            </Section>
        </TrackersContainer>
    )
}
export default Trackers