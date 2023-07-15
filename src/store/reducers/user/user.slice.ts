import { generateReauthenticatingThunkApiAction } from '../../helpers';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../../store';
import { getUserRequest, getUsersRequest, updateUserRequest, User } from '../../apis/user';
import { UserState } from './user.types';

const initialState: UserState = {
  _id: '',
  externalId: '',
  email: '',
  organisation: '',
  roles: [],
};

const getUser = createAsyncThunk<
  User,
  { payload: string },
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  'user/getUser',
  generateReauthenticatingThunkApiAction(
    async (
      state: RootState,
      { payload }: { payload: string }
    ): Promise<User> => {
      const user: User = await getUserRequest(payload);
      return user;
    }
  )
);

const updateUser = createAsyncThunk<
  User,
  { payload: string },
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  'user/updateUser',
  generateReauthenticatingThunkApiAction(
    async (
      state: RootState,
      { payload }: { payload: string }
    ): Promise<User> => {
      const userId = state.user._id;
      const updatedUser: User = {
        ...state.user,
        organisation: payload,
      };

      const user: User = await updateUserRequest(userId, updatedUser);
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
      state.email = payload.email;
      state.organisation = payload.organisation;
      state.roles = payload.roles;
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }): void => {
      state._id = payload._id;
      state.email = payload.email;
      state.externalId = payload.externalId;
      state.organisation = payload.organisation;
      state.roles = payload.roles;
    });
  },
});

const userReducer = user.reducer;
export default userReducer;
export const actions = {
  ...user.actions,
  getUser,
  updateUser,
};
