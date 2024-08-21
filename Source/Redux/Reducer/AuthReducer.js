import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const userData = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {getUserData} = userData.actions;
export default userData.reducer;
