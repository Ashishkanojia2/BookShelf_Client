import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  bookdata: [],
  // isAuth: false,
};

export const bookReducer = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.data = action.payload.bookdata;
    },
  },
});

export const {getUserData} = bookReducer.actions;
export default bookReducer.reducer;
