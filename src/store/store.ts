import { configureStore } from '@reduxjs/toolkit';

import { authReducer, orgReducer, userReducer, emailReducer } from './reducers';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: authReducer,
    org: orgReducer,
    user: userReducer,
    email: emailReducer,
  },
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
