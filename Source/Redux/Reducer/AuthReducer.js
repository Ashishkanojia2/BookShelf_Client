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
      state.data = action.payload;
    },
    loginUserData: (state, action) => {
      state.data = action.payload;
      state.msg = 'user login';
      // console.log('@@@', action.payload);
    },
    logoutUser: (state, action) => {
      state.data = action.payload;
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

export const currentuserSelectore = state => {
  return state.user.data;
};
