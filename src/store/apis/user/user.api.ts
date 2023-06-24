import { User } from './user.types';
import { request } from '../helpers';

// const baseUrl: string | undefined = process.env.API_BASE_URL;
// const url: string = `${baseUrl}/user`;

const url = 'http://localhost:8080/user';

export const getUserRequest = async (
  id: string,
  accessToken: string
): Promise<User> =>
  await request({
    url: `${url}?id=${id}`,
    method: 'GET',
    accessToken: accessToken,
  });

export const updateUserRequest = async (payload: User): Promise<User> =>
  await request({ url: url, method: 'PATCH', body: payload, accessToken: '' });

export const deleteUserRequest = async (_id: string): Promise<User> =>
  await request({ url: url, method: 'DELETE', accessToken: '' });

export const getUsersRequest = async (): Promise<User> =>
  await request({ url: `${url}/all`, method: 'GET', accessToken: '' });
