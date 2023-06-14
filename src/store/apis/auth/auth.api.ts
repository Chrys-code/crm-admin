import { request } from '../helpers';
import { Tokens } from './auth.types';

const baseUrl: string | undefined = process.env.Auth0_BASE_URL;
const url = `${baseUrl}/login`;

export const loginReqest = async (payload: any): Promise<Tokens> =>
  await request({ url, method: 'POST', body: payload });

export const refreshTokenRequest = async (
  refreshToken: string
): Promise<Tokens> =>
  await request({ url, method: 'POST', body: { refreshToken } });
