import { Email } from '../../store/apis/email/email.types';

export const adaptEmailsbyGroup = (
  emails: Email[] | null
): { [key: string]: Email[] } | null => {
  let emailsByGroup: { [key: string]: Email[] } = {};

  if (emails && emails.length) {
    emails.forEach((email: Email) => {
      if (!emailsByGroup[email.group]) {
        emailsByGroup[email.group] = [];
      }

      emailsByGroup[email.group].push(email);
    });
  }

  return emailsByGroup;
};
