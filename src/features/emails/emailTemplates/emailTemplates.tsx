import React, { FC, PropsWithChildren } from 'react';
import { EmailTemplatesProps } from './emailTemplates.types';
import Section from '../../../layout/section/section';
import Table from '../../../components/table/';
import { Email } from '../../../store/apis/email/email.types';

const EmailTemplates: FC<EmailTemplatesProps> = ({
  emails,
}: PropsWithChildren<EmailTemplatesProps>): JSX.Element => {
  const renderEmailTablesbyGroup = (emails: {
    [key: string]: Email[];
  }): JSX.Element | JSX.Element[] => {
    if (Object.keys(emails).length === 0)
      return <span>There are no templates yet...</span>;

    let elementsToRender = [];

    for (const key in emails) {
      elementsToRender.push(
        <Section label={key} withBorder withPadding>
          <Table emails={emails[key]} />
        </Section>
      );
    }

    return elementsToRender;
  };

  if (emails === null) {
    return <>There are no emails yet...</>;
  }

  return <>{renderEmailTablesbyGroup(emails)}</>;
};
export default EmailTemplates;
