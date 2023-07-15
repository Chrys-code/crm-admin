import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Analytics: FC = (): JSX.Element => {
    const isEnabled: boolean = true;

    if (!isEnabled) {
        return <>Please enable analytics in your profile/subscription first</>;
    }

    return (
        <>
            <Outlet />
        </>
    )
}
export default Analytics