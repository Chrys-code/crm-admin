import React, { FC, PropsWithChildren } from 'react'
import { Separator, SubtierContainer, SubtierHeader, SubtierInfoList, SubtierInfoListItem } from './subtier.styles'
import { SubtierProps } from './subtier.types'


const Subtier: FC<SubtierProps> = ({ plan }: PropsWithChildren<SubtierProps>): JSX.Element => {
    return (
        <SubtierContainer>
            <SubtierHeader>{plan.title.toUpperCase()}</SubtierHeader>
            <SubtierInfoList>
                <SubtierInfoListItem>
                    <span>Users:</span><span>{plan.users}</span>
                </SubtierInfoListItem>
                <SubtierInfoListItem>
                    <span>Templates:</span><span>{plan.emailTemplates}</span>
                </SubtierInfoListItem>
                <SubtierInfoListItem>
                    <span>Email Count:</span><span>{plan.emailCount}/mo</span>
                </SubtierInfoListItem>
                <SubtierInfoListItem>
                    <span>Trackers:</span><span>{plan.trackers}</span>
                </SubtierInfoListItem>
                <SubtierInfoListItem>
                    <span>Journeys:</span><span>{plan.journeys}</span>
                </SubtierInfoListItem>

                <Separator />

                <span style={{ margin: "auto" }}>{plan.price} Ft / mo</span>
            </SubtierInfoList>
        </SubtierContainer>
    )
}
export default Subtier