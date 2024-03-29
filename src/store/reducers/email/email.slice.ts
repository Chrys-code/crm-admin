import {
  generateReauthenticatingThunkApiAction,
  getGroups,
} from '../../helpers';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../../store';
import {
  createEmailRequest,
  getEmailsRequest,
  updateEmailRequest,
} from '../../apis/email';
import { EmailState } from './email.types';
import { Email, EmailSerializedById } from '../../apis/email/email.types';
import { serializeItemsById } from '../../serializers';

const initialState: EmailState = {
  emails: [],
  emailsById: {},
  groups: [],
  currentEmail: {
    _id: null,
    title: null,
    group: null,
    template: null,
    organisation: null,
  },
};

const getEmails = createAsyncThunk<
  Email[],
  null,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  'email/getEmails',
  generateReauthenticatingThunkApiAction(
    async (state: RootState): Promise<Email[] | null> => {
      const emails: Email[] = await getEmailsRequest(state.user.organisation!);
      return emails;
    }
  )
);

const createEmail = createAsyncThunk<
  Email,
  null,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  'email/createEmail',
  generateReauthenticatingThunkApiAction(
    async (state: RootState): Promise<Email> => {
      const email: Email = await createEmailRequest(state.email.currentEmail);
      return email;
    }
  )
);
const updateEmail = createAsyncThunk<
  Email,
  null,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  'email/updateEmail',
  generateReauthenticatingThunkApiAction(
    async (state: RootState): Promise<Email> => {
      const email: Email = await updateEmailRequest({
        id: state.email.currentEmail._id as string,
        payload: state.email.currentEmail as Email,
      });
      return email;
    }
  )
);

const email = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setCurrentEmailId(state, { payload }) {
      state.currentEmail._id = payload;
    },
    setCurrentEmailOrganisation(state, { payload }) {
      state.currentEmail.organisation = payload;
    },
    setCurrentEmailTitle(state, { payload }) {
      state.currentEmail.title = payload;
    },
    setCurrentEmailGroup(state, { payload }) {
      state.currentEmail.group = payload;
    },
    setCurrentEmailTemplate(state, { payload }) {
      state.currentEmail.template = payload;
    },
    clearCurrentEmail(state) {
      state.currentEmail._id = null;
      state.currentEmail.title = null;
      state.currentEmail.group = null;
      state.currentEmail.template = null;
    },
    extendGroups(state, { payload }) {
      state.groups = [...state.groups, payload];
    },
  },
  extraReducers: (builder): void => {
    builder.addCase(getEmails.fulfilled, (state, { payload }): void => {
      state.groups = getGroups(payload);
      state.emails = payload;
      state.emailsById = serializeItemsById(payload) as EmailSerializedById;
    });
    builder.addCase(createEmail.fulfilled, (state, { payload }): void => {
      state.emails = [...state.emails, payload];
      state.emailsById[payload._id] = payload;
    });
  },
});

const userReducer = email.reducer;
export default userReducer;
export const actions = {
  ...email.actions,
  getEmails,
  createEmail,
  updateEmail,
};
