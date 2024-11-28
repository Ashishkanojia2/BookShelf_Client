import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  msg: '',
};
// console.log('initialState', initialState);

export const userData = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.data = action.payload.data;
    },
    loginUserData: (state, action) => {
      state.data = action.payload;
      state.msg = 'user login';
      // console.log('@@@', action.payload);
    },
    logoutUser: (state, action) => {
      state.data = [];
      // state.data = action.payload;
      state.msg = 'user Logout';
      return initialState;
    },
    clearUserData: (state, action) => {
      state.data = [];
      state.msg = 'data Clear';
    },
    updateUserData: (state, action) => {
      state.data = action.payload;
    },
  },
});
//EXPORT ACTION
export const {
  getUserData,
  logoutUser,
  loginUserData,
  clearUserData,
  updateUserData,
} = userData.actions;

//EXPORT THE REDUCER
export default userData.reducer;

//SELECTOR
export const currentuserSelectore = state => {
  return state.user.data;
};
