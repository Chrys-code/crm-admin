import { Tokens } from '../../apis/auth';

export interface AuthState extends Tokens {}

export type SetTokensPayload = Tokens;
