import React, { FC, PropsWithChildren } from 'react';
import { EmailTemplatesProps } from './emailTemplates.types';
import Section from '../../../layout/section/section';
import Table from '../../../components/table/table';
import { Email } from '../../../store/apis/email/email.types';

const EmailTemplates: FC<EmailTemplatesProps> = ({
  emails,
}: PropsWithChildren<EmailTemplatesProps>): JSX.Element => {
  const renderEmailTablesbyGroup = (emails: {
    [key: string]: Email[];
  }): JSX.Element | undefined => {
    if (Object.keys(emails).length === 0)
      return <span>There are no templates yet...</span>;

    for (const key in emails) {
      return (
        <Section label={key} withBorder withPadding>
          <Table data={emails[key]} />
        </Section>
      );
    }
  };

  return <>{renderEmailTablesbyGroup(emails)}</>;
};
export default EmailTemplates;
