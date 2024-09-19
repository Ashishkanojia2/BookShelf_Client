import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  // isAuth: false,
  msg: '',
};

export const userData = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserData: (state, action) => {
      // const {data, isSuccess} = action.payload;
      state.data = action.payload.data;
      // state.isAuth = isSuccess;
    },
    loginUserData: (state, action) => {
      state.data = action.payload.data;
      // state.isAuth = true;
      state.msg = 'user login';
    },
    logoutUser: (state, action) => {
      state.data = action.payload;
      // state.isAuth = false;
      state.msg = 'user Logout';
    },
    clearUserData: (state, action) => {
      state.data = '';
      state.msg = 'data Clear';
    },
    updateUserData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  getUserData,
  logoutUser,
  loginUserData,
  clearUserData,
  updateUserData,
} = userData.actions;
export default userData.reducer;
