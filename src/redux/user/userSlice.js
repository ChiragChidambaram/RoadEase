import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    value: {},
  },
  reducers: {
    addUser(state, action) {
      state.value = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    logoutUser(state, action) {},
    clearUser(state, action) {
      (state.token = ''), (state.value = {});
    },
  },
});

export const {addUser, setToken, logoutUser, clearUser} = userSlice.actions;
export default userSlice.reducer;
