import { Email } from '../../store/apis/email/email.types';

export const adaptEmailsbyGroup = (
  emails: Email[]
): { [key: string]: Email[] } | null => {
  if (!emails.length) return null;

  let emailsByGroup: { [key: string]: Email[] } = {};

  emails.forEach((email: Email) => {
    if (!emailsByGroup[email.group]) {
      emailsByGroup[email.group] = [];
    }

    emailsByGroup[email.group].push(email);
  });

  return emailsByGroup;
};
