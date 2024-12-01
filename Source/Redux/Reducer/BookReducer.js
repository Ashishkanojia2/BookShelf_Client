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
    favBook: (state, action) => {
      const exist = state.bookdata.find(id => {
        return id === action.payload;
      });
      if (exist) {
        state.bookdata = state.bookdata.filter(
          bookId => bookId !== action.payload,
        );
      } else {
        state.bookdata.push(action.payload);
      }

      // state.bookdata = [...state.bookdata, action.payload];
      console.log(state.bookdata);
    },
  },
});

export const {setBookData, favBook} = bookReducer.actions;
export default bookReducer.reducer;
