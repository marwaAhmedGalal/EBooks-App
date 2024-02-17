
import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./slices/cartSlice";

const store = configureStore({
  reducer: {
   item: itemsReducer
  },
});

export default store;