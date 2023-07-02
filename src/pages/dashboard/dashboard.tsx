import React, { FC } from 'react';
import Section from '../../layout/section';
import Subheader from '../../components/subheader/subheader';

const Dashboard: FC = (): JSX.Element => {
  return (
    <>
      <Subheader
        label={'Hello, [nickname]'}
        subtext={'What do we do today?'}
      ></Subheader>

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
