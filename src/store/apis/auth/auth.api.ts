import { request } from '../helpers';
import {
  getSendLoginCodeBody,
  getVerifyLoginCodeBody,
} from './auth.api.helpers';
import { Tokens, VerifyCodeResponse } from './auth.api.types';

const baseUrl: string | undefined = process.env.Auth0_BASE_URL;
const url = `${baseUrl}/login`;

export const loginReqest = async (payload: any): Promise<Tokens> =>
  await request({ url, method: 'POST', body: payload });

export const refreshTokenRequest = async (
  refreshToken: string
): Promise<Tokens> =>
  await request({ url, method: 'POST', body: { refreshToken } });

export const sendLoginCode = async (email: string): Promise<void> =>
  await request({
    url: `${process.env.REACT_APP_AUTH0_DOMAIN}/passwordless/start`,
    method: 'POST',
    body: getSendLoginCodeBody(email),
  });

export const verifyLoginCode = async ({
  code,
  email,
}: {
  code: string;
  email: string;
}): Promise<VerifyCodeResponse> =>
  await request({
    url: `${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`,
    method: 'POST',
    body: getVerifyLoginCodeBody({ code, email }),
  });
