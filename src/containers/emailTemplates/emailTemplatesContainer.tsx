import React, { FC, PropsWithChildren, useEffect } from 'react';
import { RootState, useAppSelector } from '../../store/store';
import { EmailState } from '../../store/reducers/email/email.types';
import EmailTemplates from '../../features/emails/emailTemplates/emailTemplates';
import { adaptEmailsbyGroup } from '../../adapters/email';
import { Email } from '../../store/apis/email/email.types';
import { EmailTemplatesContainerProps } from './emailTemplatesContainer.types';
import { UserState } from '../../store/reducers/user/user.types';

const EmailTemplatesContainer: FC<EmailTemplatesContainerProps> = ({
  getEmails,
}: PropsWithChildren<EmailTemplatesContainerProps>): JSX.Element => {
  const { emails } = useAppSelector(
    (state: RootState): EmailState => state.email
  );
  const { organisation } = useAppSelector(
    (state: RootState): UserState => state.user
  );

  useEffect((): (() => void) => {
    loadEmailsToStore();
    return (): void => {};
  }, [organisation]);

  const loadEmailsToStore = async (): Promise<void> => {
    await getEmails();
  };

  const adaptedEmails: { [key: string]: Email[] } | null =
    adaptEmailsbyGroup(emails);

  return <EmailTemplates emails={adaptedEmails} />;
};
export default EmailTemplatesContainer;
