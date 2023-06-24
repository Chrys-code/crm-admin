import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  Reducer,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit';
import { Tokens, refreshTokenRequest } from '../../apis/auth';
import { RootState, AppDispatch } from '../../store';
import {
  AuthState,
  AuthUser,
  AuthUserPayload,
  SetTokensPayload,
} from './auth.slice.types';

const initialState: AuthState = {
  user: {
    externalId: null,
    email: null,
    nickname: null,
    name: null,
    email_verified: null,
    picture: null,
  },
  accessToken: localStorage.getItem('access_token') || '',
  refreshToken: localStorage.getItem('refresh_token') || '',
};

const refreshToken = createAsyncThunk<
  string,
  null,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('auth/refreshToken', async (_, thunkAPI): Promise<string> => {
  const state: RootState = thunkAPI.getState();
  const { refreshToken } = state.auth;
  const tokens: Tokens = await refreshTokenRequest(refreshToken);
  return tokens.accessToken;
});

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser: (
      state: AuthState,
      { payload }: { payload: AuthUserPayload }
    ): void => {
      const authUser: AuthUser = {
        externalId: payload.sub,
        email: payload.email,
        nickname: payload.nickname,
        name: payload.name,
        email_verified: payload.email_verified,
        picture: payload.picture,
      };

      state.user = authUser;
    },
    setTokens: (
      state: AuthState,
      action: PayloadAction<SetTokensPayload>
    ): void => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
    },
    logout: (state: AuthState): void => {
      state.accessToken = '';
      state.refreshToken = '';
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<AuthState>): void => {
    builder.addCase(refreshToken.fulfilled, (state, { payload }): void => {
      state.accessToken = payload;
      localStorage.setItem('accessToken', payload);
    });
  },
});

const authReducer: Reducer<AuthState> = auth.reducer;
export default authReducer;
export const actions = {
  ...auth.actions,
  refreshToken,
};
