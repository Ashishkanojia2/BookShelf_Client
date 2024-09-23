import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartData: [],
  // isAuth: false,
};

export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartData: (state, action) => {
      //   state.cartData = action.payload;
      state.cartData = [...state.cartData, action.payload];
    },
    RemoveCartData: (state, action) => {
      //   state.cartData = action.payload;
      state.cartData = action.payload;
    },
  },
});

export const {setCartData ,RemoveCartData} = cartReducer.actions;
export default cartReducer.reducer;
