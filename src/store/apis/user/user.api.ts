import { User } from './user.types';
import { request } from '../helpers';

const baseUrl: string | undefined = process.env.API_BASE_URL;
const url: string = `${baseUrl}/user`;

export const getUserRequest = async (): Promise<User> =>
  await request({ url: url, method: 'GET', accessToken: '' });

export const updateUserRequest = async (payload: User): Promise<User> =>
  await request({ url: url, method: 'PATCH', body: payload, accessToken: '' });

export const deleteUserRequest = async (_id: string): Promise<User> =>
  await request({ url: url, method: 'DELETE', accessToken: '' });

export const getUsersRequest = async (): Promise<User> =>
  await request({ url: `${url}/all`, method: 'GET', accessToken: '' });
