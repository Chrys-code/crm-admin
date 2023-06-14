import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Tokens, refreshTokenRequest } from '../../apis/auth';
import { RootState, AppDispatch } from '../../store';

export interface AuthState extends Tokens {
  email: string;
  loginRedirect: string;
}

export type SetTokensPayload = Tokens;

const initialState: AuthState = {
  accessToken: localStorage.getItem('access_token') || '',
  refreshToken: localStorage.getItem('refresh_token') || '',
  email: '',
  loginRedirect: '/home',
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
    setTokens: (
      state: AuthState,
      action: PayloadAction<SetTokensPayload>
    ): void => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
    },
    setEmail: (
      state: AuthState,
      action: PayloadAction<{ email: string }>
    ): void => {
      state.email = action.payload.email;
    },
    setLoginRedirect: (
      state: AuthState,
      action: PayloadAction<{ pathname: string }>
    ): void => {
      state.loginRedirect = action.payload.pathname;
    },
    logout: (state: AuthState): void => {
      state.accessToken = '';
      state.refreshToken = '';
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
  },
  extraReducers: (builder): void => {
    builder.addCase(refreshToken.fulfilled, (state, { payload }): void => {
      state.accessToken = payload;
      localStorage.setItem('accessToken', payload);
    });
  },
});

const authReducer = auth.reducer;
export default authReducer;
export const actions = {
  ...auth.actions,
  refreshToken,
};
