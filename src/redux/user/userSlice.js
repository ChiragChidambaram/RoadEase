import {createSlice} from '@reduxjs/toolkit';
import {LocalStorage} from '../../util';
import {LocalStorageKeys} from '../../helpers/constants';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {},
    isLogout: false,
  },
  reducers: {
    addUser(state, action) {},
    logoutUser(state, action) {},
  },
});

export const {addUser, logoutUser} = userSlice.actions;
export default userSlice.reducer;
