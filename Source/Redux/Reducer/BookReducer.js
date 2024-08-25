import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  bookdata: [],
  // isAuth: false,
};

export const bookReducer = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBookData: (state, action) => {
      state.bookdata = action.payload;
    },
  },
});

export const {setBookData} = bookReducer.actions;
export default bookReducer.reducer;
