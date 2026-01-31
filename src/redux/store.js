import { configureStore } from "@reduxjs/toolkit";
import cartRdeucer from "./slice"
import productSReducer from "./productslice"


export const store = configureStore({
    reducer :{
        fat : cartRdeucer,
        products :productSReducer
    }
})