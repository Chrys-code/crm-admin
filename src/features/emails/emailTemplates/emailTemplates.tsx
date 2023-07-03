import React, { FC, PropsWithChildren } from 'react';
import { EmailTemplatesProps } from './emailTemplates.types';
import Section from '../../../layout/section/section';
import Table from '../../../components/table/table';
import { mockTemplateData } from './mockData';

const EmailTemplates: FC<
  EmailTemplatesProps
> = ({}: PropsWithChildren<EmailTemplatesProps>): JSX.Element => {
  const data = mockTemplateData;
  return (
    <>
      <Section label={Object.keys(data)[1]} withBorder withPadding>
        <Table data={data.Reminders} />
      </Section>

      <Section label={Object.keys(data)[0]} withBorder withPadding>
        <Table data={data.Signups} />
      </Section>
    </>
  );
};
export default EmailTemplates;
