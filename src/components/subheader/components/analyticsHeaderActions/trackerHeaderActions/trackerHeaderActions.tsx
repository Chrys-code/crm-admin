import React, { FC } from 'react'
import Button from '../../../../base/button';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const TrackerHeaderActions: FC = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <Button onClick={() => navigate('/analytics/create-tracker')}>Create</Button>
    );
};

export default TrackerHeaderActions