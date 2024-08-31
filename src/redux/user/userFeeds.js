import {createSlice} from '@reduxjs/toolkit';

const userFeeds = createSlice({
  name: 'userFeeds',
  initialState: {
    value:[],
  },
  reducers: {
    
    setUserFeeds(state, action) {
      state.value = action.payload
    },
  },
});

export const {setUserFeeds} = userFeeds.actions;
export default userFeeds.reducer;
