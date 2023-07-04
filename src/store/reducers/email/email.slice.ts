import { generateReauthenticatingThunkApiAction } from '../../helpers';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, AppDispatch } from '../../store';
import { createEmailsRequest, getEmailsRequest } from '../../apis/email';
import { EmailState } from './email.types';
import { Email, EmailSerializedById } from '../../apis/email/email.types';

const initialState: EmailState = {
  emails: {},
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
      const email: Email = await createEmailsRequest(state.email.currentEmail);
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
  },
  extraReducers: (builder): void => {
    builder.addCase(getEmails.fulfilled, (state, { payload }): void => {
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
