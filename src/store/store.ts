import { configureStore } from '@reduxjs/toolkit';

import { authReducer, userReducer, emailReducer } from './reducers';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    email: emailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
