import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";

export const cartProducts=configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
})