import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isAuth: false,
};

export const userData = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.data = action.payload;
      state.isAuth = true;
    },
    logoutUser: (state, action) => {
      state.data = action.payload;
      state.isAuth = false;
    },
  },
});

export const {getUserData , logoutUser} = userData.actions;
export default userData.reducer;
