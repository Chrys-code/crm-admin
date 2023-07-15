import React, { FC } from 'react';
import Section from '../../layout/section';
import { Link } from 'react-router-dom';

const Dashboard: FC = (): JSX.Element => {
  return (
    <>
      <Section withPadding={false}>

        <Link to="/email-templates/template-editor" style={{ width: '100%' }}>
          <Section withPadding withBorder>
            <span>Create Email Template</span>
          </Section>
        </Link>

        <Link to="/users/user-editor" style={{ width: '100%' }}>
          <Section withPadding withBorder>
            <span>Create New User</span>
          </Section>
        </Link>

        <Link to="/analytics/tracker-editor" style={{ width: '100%' }}>
          <Section withPadding withBorder>
            <span>Create New Tracker</span>
          </Section>
        </Link>

      </Section>
    </>
  );
};
export default Dashboard;
