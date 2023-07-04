import { Email } from '../apis/email/email.types';

export const serializeEmail = (email: Email) => {
  return {
    [email._id]: {
      ...email,
    },
  };
};
