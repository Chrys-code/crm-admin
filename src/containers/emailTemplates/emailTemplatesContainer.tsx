import React, { FC } from 'react';
import { RootState, useAppSelector } from '../../store/store';
import { EmailState } from '../../store/reducers/email/email.types';
import EmailTemplates from '../../features/emails/emailTemplates/emailTemplates';
import { adaptEmails } from '../../adapters/email';
import { Email } from '../../store/apis/email/email.types';

const EmailTemplatesContainer: FC = (): JSX.Element => {
  const { emails } = useAppSelector(
    (state: RootState): EmailState => state.email
  );

  const adaptedEmails: { [key: string]: Email[] } = adaptEmails(emails);

  return <EmailTemplates emails={adaptedEmails} />;
};
export default EmailTemplatesContainer;
