import { Email } from '../../../store/apis/email/email.types';

export interface EmailTemplatesProps {
  emails: { [key: string]: Email[] } | null;
}
export interface EmailTemplatesContainerStyleProps {}
