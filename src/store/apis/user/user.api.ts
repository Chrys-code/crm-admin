import { NewUser, User } from './user.types';
import { request } from '../helpers';

// const baseUrl: string | undefined = process.env.API_BASE_URL;
// const url: string = `${baseUrl}/user`;

const url = 'http://localhost:8080/user';

export const getUserRequest = async (id: string): Promise<User> =>
  await request({
    url: `${url}?id=${id}`,
    method: 'GET',
  });

export const createUserRequest = async (newUser: NewUser): Promise<User> =>
  await request({
    url: url,
    method: 'POST',
    body: newUser,
  });

export const updateUserRequest = async (
  id: string,
  payload: User
): Promise<User> =>
  await request({ url: `${url}?id=${id}`, method: 'PATCH', body: payload });

export const deleteUserRequest = async (_id: string): Promise<User> =>
  await request({ url: url, method: 'DELETE' });

export const getUsersRequest = async (id: string): Promise<User[]> =>
  await request({ url: `${url}/by-org-id?id=${id}`, method: 'GET' });
