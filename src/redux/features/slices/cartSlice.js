import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalCost: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.quantity = action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      let qty = [];
      let tempPrices = [];
      state.products.map((item) => qty.push(item.quantity));
      state.products.map((item) => tempPrices.push(item.quantity * item.price));
      state.totalQuantity = qty.reduce((acc, curr) => acc + curr, 0);
      state.totalCost = tempPrices.reduce((acc, curr) => acc + curr, 0);
    },

    cartPlusOne: (state, action) => {
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      item.quantity++;

      let qty = [];
      let tempPrices = [];
      state.products.map((product) => qty.push(product.quantity));
      state.products.map((item) => tempPrices.push(item.quantity * item.price));

      state.totalQuantity = qty.reduce((acc, curr) => acc + curr, 0);
      state.totalCost = tempPrices.reduce((acc, curr) => acc + curr, 0);
    },

    cartMinusOne: (state, action) => {
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (item.quantity > 1) {
        item.quantity--;
      }

      let qty = [];
      let tempPrices = [];
      state.products.map((product) => qty.push(product.quantity));
      state.products.map((item) => tempPrices.push(item.quantity * item.price));
      state.totalQuantity = qty.reduce((acc, curr) => acc + curr, 0);
      state.totalCost = tempPrices.reduce((acc, curr) => acc + curr, 0);
    },

    removeFromCart: (state, action) => {
      const filteredProducts = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      state.products = filteredProducts;

      let qty = [];
      let tempPrices = [];
      state.products.map((item) => qty.push(item.quantity));
      state.products.map((item) => tempPrices.push(item.quantity * item.price));
      state.totalQuantity = qty.reduce((acc, curr) => acc + curr, 0);
      state.totalCost = tempPrices.reduce((acc, curr) => acc + curr, 0);
    },

    clearCart: (state) => {
      state.products = [];
      state.totalCost = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  cartPlusOne,
  cartMinusOne,
} = cartSlice.actions;
export default cartSlice.reducer;
