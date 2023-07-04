import { generateReauthenticatingThunkApiAction } from '../../helpers';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../../store';
import { createEmailRequest, getEmailsRequest } from '../../apis/email';
import { EmailState } from './email.types';
import { Email, EmailSerializedById } from '../../apis/email/email.types';

const initialState: EmailState = {
  emails: {},
  groups: [],
  currentEmail: {
    _id: null,
    title: null,
    group: null,
    template: null,
  },
};

const getEmails = createAsyncThunk<
  EmailSerializedById,
  null,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  'email/getEmails',
  generateReauthenticatingThunkApiAction(
    async (): Promise<EmailSerializedById> => {
      const emails: EmailSerializedById = await getEmailsRequest();

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

const email = createSlice({
  name: 'email',
  initialState,
  reducers: {
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
      let groups: string[] = [];

      for (const key in payload) {
        if (!groups.includes(payload[key].group))
          groups.push(payload[key].group);
      }

      state.groups = groups;
      state.emails = payload;
    });
    builder.addCase(createEmail.fulfilled, (state, { payload }): void => {
      state.emails[payload._id] = payload;
    });
  },
});

const userReducer = email.reducer;
export default userReducer;
export const actions = {
  ...email.actions,
  getEmails,
  createEmail,
};
