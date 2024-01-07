import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./fuatures/user/userSlice";
import cartReducer from "./fuatures/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
