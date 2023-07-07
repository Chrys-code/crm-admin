import { Email, NewEmail } from './email.types';
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

export const getEmailRequest = async (id: string): Promise<Email> =>
  await request({
    url: `${url}/${id}`,
    method: 'GET',
  });

export const getEmailsRequest = async (payload: string): Promise<Email[]> =>
  await request({
    url: `${url}/by_org_id?id=${payload}`,
    method: 'GET',
  });

export const updateEmailRequest = async ({
  id,
  payload,
}: {
  id: string;
  payload: Email;
}): Promise<Email> =>
  await request({ url: `${url}?id=${id}`, method: 'PATCH', body: payload });

export const deleteEmailRequest = async (payload: string): Promise<any> =>
  await request({ url: `${url}?id=${payload}`, method: 'DELETE' });
