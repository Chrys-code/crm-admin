import { generateReauthenticatingThunkApiAction } from '../../helpers';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../../store';
import { OrganisationState } from './organisation.types';
import {
  NewOrganisation,
  Organisation,
  createOrganisationRequest,
  getOrganisationRequest,
  updateOrganisationRequest,
} from '../../apis/organisation';
import { User, getUsersRequest, updateUserRequest } from '../../apis/user';
import { UserSerializedById } from '../../apis/user/user.types';
import { serializeItemsById } from '../../serializers';

const initialState: OrganisationState = {
  _id: null,
  title: null,
  users: [],
  usersById: {},
  currentUser: {
    _id: null,
    externalId: null,
    email: null,
    organisation: null,
    roles: []
  }
};


const getOrganisation = createAsyncThunk<
  Organisation,
  { payload: string },
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  'organisation/getOrganisation',
  generateReauthenticatingThunkApiAction(
    async (
      state: RootState,
      { payload }: { payload: string }
    ): Promise<Organisation> => {
      const organisation: Organisation = await getOrganisationRequest(payload);
      const users: User[] = await getUsersRequest(organisation._id);
      organisation.users = users;
      return organisation;
    }
  )
);

const createOrganisation = createAsyncThunk<
  Organisation,
  NewOrganisation,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  'organisation/createOrganisation',
  generateReauthenticatingThunkApiAction(
    async (
      state: RootState,
      {
        payload,
      }: {
        payload: NewOrganisation;
      }
    ): Promise<Organisation> => {
      const organisation: Organisation = await createOrganisationRequest(
        payload
      );

      const users: User[] = await getUsersRequest(organisation._id);
      organisation.users = users;

      return organisation;
    }
  )
);

const updateOrganisation = createAsyncThunk<
  Organisation,
  Organisation,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  'organisation/updateOrganisation',
  generateReauthenticatingThunkApiAction(
    async ({ payload }: { payload: Organisation }): Promise<Organisation> => {
      const organisation: Organisation = await updateOrganisationRequest({
        id: payload._id,
        payload: payload,
      });

      const users: User[] = await getUsersRequest(organisation._id);
      organisation.users = users;

      return organisation;
    }
  )
);

const getOrganisationUsers = createAsyncThunk<
  User[],
  null,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  'organisation/getOrganisationUsers',
  generateReauthenticatingThunkApiAction(
    async (
      state: RootState,
    ): Promise<User[]> => {
      const orgId: string = state.org._id!;
      const users: User[] = await getUsersRequest(orgId);

      return users;
    }
  )
);


const organisation = createSlice({
  name: 'organisation',
  initialState,
  reducers: {
    setCurrentUserId(state, { payload }) {
      state.currentUser._id = payload;
    },
    setCurrentUserExternalId(state, { payload }) {
      state.currentUser.externalId = payload;
    },
    setCurrentUserEmail(state, { payload }) {
      state.currentUser.email = payload;
    },
    setCurrentUserOrganisation(state, { payload }) {
      state.currentUser.organisation = payload
    },
    setCurrentUserRoles(state, { payload }) {
      state.currentUser.roles = payload;
    },
    clearCurrentUser(state) {
      state.currentUser._id = null
      state.currentUser.externalId = null
      state.currentUser.email = null
      state.currentUser.roles = []
    }
  },
  extraReducers: (builder): void => {
    builder.addCase(getOrganisation.fulfilled, (state, { payload }): void => {
      state._id = payload._id;
      state.title = payload.title;
      state.users = payload.users;
      state.usersById = serializeItemsById(payload.users) as UserSerializedById;

    });
    builder.addCase(
      createOrganisation.fulfilled,
      (state, { payload }): void => {
        state._id = payload._id;
        state.title = payload.title;
        state.users = payload.users;
      }
    );
    builder.addCase(
      updateOrganisation.fulfilled,
      (state, { payload }): void => {
        state._id = payload._id;
        state.title = payload.title;
        state.users = payload.users;
      }
    );
    builder.addCase(
      getOrganisationUsers.fulfilled,
      (state, { payload }): void => {
        state.users = payload;
      }
    );
  },
});

const userReducer = organisation.reducer;
export default userReducer;
export const actions = {
  ...organisation.actions,
  getOrganisation,
  createOrganisation,
  updateOrganisation,
  getOrganisationUsers
};
