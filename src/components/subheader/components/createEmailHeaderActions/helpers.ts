import { EmailSerializedById } from '../../../../store/apis/email';

export const getGroups = (emails: EmailSerializedById): string[] => {
  let groups: string[] = [];

  for (const key in emails) {
    if (!groups.includes(emails[key].group)) groups.push(emails[key].group);
  }

  return groups;
};
