export const getSendLoginCodeBody = (email: string): object => {
  return {
    client_id: process.env.REACT_APP_AUTHOH_USER_CLIENT_ID,
    connection: 'email',
    email,
    send: 'code',
    authParams: {
      scope: 'openid offline_access profile email',
    },
  };
};

export const getVerifyLoginCodeBody = ({
  code,
  email,
}: {
  code: string;
  email: string;
}): object => {
  return {
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    realm: 'email',
    grant_type: 'http://auth0.com/oauth/grant-type/passwordless/otp',
    username: email,
    otp: code,
    audience: process.env.REACT_APP_AUDIENCE,
    scope: 'openid offline_access profile email',
  };
};
