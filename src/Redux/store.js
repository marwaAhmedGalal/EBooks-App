
import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./slices/slice";

const store = configureStore({
  reducer: {
    item: itemsReducer,
   
  },
});

export default store;