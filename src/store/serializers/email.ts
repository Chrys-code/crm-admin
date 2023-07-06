import { Email, EmailSerializedById } from '../apis/email/email.types';

export const serializeEmail = (email: Email): EmailSerializedById => {
  return {
    [email._id]: {
      ...email,
    },
  };
};

export const serializeEmails = (
  emails: Email[] | null
): EmailSerializedById => {
  let serializedEmails: EmailSerializedById = {};

  if (emails && emails.length) {
    emails.forEach(
      (email: Email) => (serializedEmails[email._id] = { ...email })
    );
  }

  return serializedEmails;
};
