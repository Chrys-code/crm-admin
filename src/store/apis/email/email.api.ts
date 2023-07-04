import { Email, EmailSerializedById, NewEmail } from './email.types';
import { request } from '../helpers';

// const baseUrl: string | undefined = process.env.API_BASE_URL;
// const url: string = `${baseUrl}/user`;

const url = 'http://localhost:8080/email';

export const createEmailRequest = async (newEmail: NewEmail): Promise<Email> =>
  await request({
    url: url,
    method: 'POST',
    body: newEmail,
  });

export const getEmailsRequest = async (): Promise<EmailSerializedById> =>
  await request({
    url: `${url}/all`,
    method: 'GET',
  });

export const updateEmailRequest = async (
  payload: EmailSerializedById
): Promise<EmailSerializedById> =>
  await request({ url: url, method: 'PATCH', body: payload });

export const deleteEmailRequest = async (
  payload: string
): Promise<EmailSerializedById> =>
  await request({ url: `${url}?id=${payload}`, method: 'DELETE' });
