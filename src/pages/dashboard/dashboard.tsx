import React, { FC } from 'react';
import Section from '../../layout/section';
import { Link } from 'react-router-dom';

const Dashboard: FC = (): JSX.Element => {
  return (
    <>
      <Section withPadding={false}>
        <Link to="/email-templates/create-template" style={{ width: '100%' }}>
          <Section type="div" withBorder>
            <span>Create New Email Template</span>
          </Section>
        </Link>
        <Link to="/users/create-user" style={{ width: '100%' }}>
          <Section type="div" withBorder>
            <span>Add New User</span>
          </Section>
        </Link>
        <Section type="div" withBorder>
          <span>SMTH</span>
        </Section>
      </Section>
    </>
  );
};
export default Dashboard;
