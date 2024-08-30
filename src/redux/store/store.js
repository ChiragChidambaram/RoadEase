import {configureStore} from '@reduxjs/toolkit';

import userSliceReducer from '../user/userSlice';
import userFeedsReducer from '../user/userFeeds'

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    userFeeds:userFeedsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});
