import { Email } from './apis/email/email.types';
import { actions as authActions } from './reducers/auth';

const { refreshToken } = authActions;

export const generateReauthenticatingThunkApiAction = (action: any) => {
  // return the thunk action
  return async (_: any, thunkAPI: any): Promise<any> => {
    const { dispatch, getState } = thunkAPI;
    try {
      return await action(getState(), _, thunkAPI);
    } catch (err: any) {
      if (err.message === 'Unauthorized') {
        await dispatch(refreshToken(null));
        return await action(getState(), _, thunkAPI);
      }
    }
  };
};

export const getGroups = (payload: Email[] | null): string[] => {
  let groups: string[] = [];

  if (payload && payload.length) {
    for (const key in payload) {
      if (!groups.includes(payload[key].group)) groups.push(payload[key].group);
    }
  }

  return groups;
};
