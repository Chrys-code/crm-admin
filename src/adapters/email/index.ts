import { EmailSerializedById } from '../../store/apis/email';
import { Email } from '../../store/apis/email/email.types';

export const adaptEmails = (
  emails: EmailSerializedById
): { [key: string]: Email[] } => {
  let data = {};

  for (const key in emails) {
    // @ts-ignore
    if (!data[emails[key].group]) {
      // @ts-ignore
      data[emails[key].group] = [];
    }

    // @ts-ignore
    data[emails[key].group].push({
      _id: emails[key]._id,
      title: emails[key].title,
      group: emails[key].group,
      template: emails[key].template,
    });
  }

  return data;
};
