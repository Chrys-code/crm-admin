import { generateReauthenticatingThunkApiAction } from '../../helpers';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../../store';
import { getUserRequest, User } from '../../apis/user';

export type UserState = User;

const initialState: UserState = {
  _id: '',
  externalId: '',
  firstName: '',
  lastName: '',
  email: '',
  organizationId: '',
  roles: [],
};

const getUser = createAsyncThunk<
  User,
  null,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  'user/getUser',
  generateReauthenticatingThunkApiAction(
    async (state: RootState): Promise<User> => {
      const { accessToken } = state.auth;
      const user: User = await getUserRequest('', '');
      return user;
    }
  )
);

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder): void => {
    builder.addCase(getUser.fulfilled, (state, { payload }): void => {
      state._id = payload._id;
      state.externalId = payload.externalId;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.organizationId = payload.organizationId;
      state.roles = payload.roles;
    });
  },
});

const userReducer = user.reducer;
export default userReducer;
export const actions = {
  ...user.actions,
  getUser,
};
