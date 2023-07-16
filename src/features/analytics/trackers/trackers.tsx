import React, { FC, PropsWithChildren } from 'react'
import { TrackerSelector, TrackerTitle, TrackersContainer } from './trackers.styles'
import { TrackersProps } from './trackers.types'
import Section from '../../../layout/section/section'
import Table from '../../../components/table'

const Trackers: FC<TrackersProps> = ({ trackers }: PropsWithChildren<TrackersProps>): JSX.Element => {

    return (
        <TrackersContainer>
            <Section type='div' withPadding={false}>
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


            <Section label="Trackers" withBorder withPadding>
                <Table tableType="tracker" dataRows={trackers} />
            </Section>


        </TrackersContainer>
    )
}
export default Trackers