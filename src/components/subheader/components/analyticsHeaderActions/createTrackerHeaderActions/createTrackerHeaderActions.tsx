import React, { FC, PropsWithChildren } from 'react'
import { CreateTrackerHeaderActionsContainer } from './createTrackerHeaderActions.styles'
import { CreateTrackerHeaderActionsProps } from './createTrackerHeaderActions.types'
import Button from '../../../../base/button'

const CreateTrackerHeaderActions: FC<CreateTrackerHeaderActionsProps> = ({ }: PropsWithChildren<CreateTrackerHeaderActionsProps>): JSX.Element => {

    function handleSave() {

    }


    return (
        <>
            <Button onClick={handleSave}>Save</Button>
        </>
    )
}
export default CreateTrackerHeaderActions