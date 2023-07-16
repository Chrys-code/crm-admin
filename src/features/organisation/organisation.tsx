import React, { FC, PropsWithChildren } from 'react'
import { OrganisationProps } from './organisation.types'
import { RootState, useAppSelector } from '../../store/store'
import { OrganisationState } from '../../store/reducers/org/organisation.types'
import Section from '../../layout/section/section'
import Subtier from '../../components/subtier/subtier'
import { Plan } from '../../components/subtier/subtier.types'


const plans = [
    {
        title: 'Basic',
        users: 1,
        emailTemplates: 10,
        emailCount: 200,
        trackers: 10,
        journeys: 3,
        price: 10000
    },
    {
        title: 'Premium',
        users: 10,
        emailTemplates: "Unlimited",
        emailCount: "Unlimited",
        trackers: "Unlimited",
        journeys: "Unlimited",
        price: 20000
    },
    {
        title: 'Gold',
        users: 3,
        emailTemplates: 50,
        emailCount: 700,
        trackers: 30,
        journeys: 10,
        price: 15000
    },
]

const Organisation: FC<OrganisationProps> = ({ }: PropsWithChildren<OrganisationProps>): JSX.Element => {

    const organisation = useAppSelector((state: RootState): OrganisationState => state.org);


    const renderPlans = (plans: Plan[]) => {
        return plans.map((plan: Plan) => <Subtier plan={plan} />)
    }


    return (
        <>
            <Section withPadding={false}>
                <Section label='Title:' type='div' withBorder>
                    <span style={{ margin: 'auto' }}>
                        {organisation.title}
                    </span>
                </Section>

                <Section label='Number of users:' type='div' withBorder>
                    <span style={{ margin: 'auto' }}>
                        {organisation.users.length}
                    </span>
                </Section>
            </Section>

            <Section label='Subscription' withPadding withBorder>


                {renderPlans(plans)}
            </Section>
        </>
    )
}
export default Organisation