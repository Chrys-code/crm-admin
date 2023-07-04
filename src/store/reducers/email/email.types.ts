import { EmailSerializedById } from '../../apis/email/email.types';

export interface EmailState {
  emails: EmailSerializedById;
  currentEmail: StoreEmail;
}

export interface StoreEmail {
  _id: string | null;
  title: string | null;
  group: string | null;
  template: string | null;
}
