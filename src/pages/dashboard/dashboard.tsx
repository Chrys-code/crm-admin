import React, { FC } from 'react';
import Section from '../../layout/section';

const Dashboard: FC = (): JSX.Element => {
  return (
    <>
      <Section withPadding={false}>
        <Section type="div" withBorder>
          <span>SMTH</span>
          <span>SMTH</span>
          <span>SMTH</span>
        </Section>
        <Section type="div" withBorder>
          <span>SMTH</span>
          <span>SMTH</span>
          <span>SMTH</span>
        </Section>
        <Section type="div" withBorder>
          <span>SMTH</span>
          <span>SMTH</span>
          <span>SMTH</span>
        </Section>
      </Section>
      <Section withBorder>
        <span>SMTH</span>
        <span>SMTH</span>
        <span>SMTH</span>
      </Section>
      <Section label="This is a label" withBorder>
        <span>SMTH</span>
        <span>SMTH</span>
        <span>SMTH</span>
      </Section>
    </>
  );
};
export default Dashboard;
