import { Tokens } from '../../apis/auth';

export interface AuthUserPayload {
  sub: string | null;
  email: string | null;
  nickname: string | null;
  name: string | null;
  email_verified: boolean | null;
  picture: string | null;
  updated_at: string | null;
}

export interface AuthUser {
  externalId: string | null;
  email: string | null;
  nickname: string | null;
  name: string | null;
  email_verified: boolean | null;
  picture: string | null;
}

export interface AuthState extends Tokens {
  user: AuthUser;
}

export type SetTokensPayload = Tokens;
