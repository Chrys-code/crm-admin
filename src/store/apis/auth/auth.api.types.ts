export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface VerifyCodeResponse {
  error?: boolean;
  accessToken: string;
  refreshToken: string;
}
