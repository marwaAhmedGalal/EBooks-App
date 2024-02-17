import { createSlice } from "@reduxjs/toolkit";
import ramy from '../../images/images.png';

const initialState = {
  items: [{
    title:"How to Bulk like a Beast",
    image:ramy,
    stars:null,
    price:"75",
  }],

}

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {

  },
})


export const itemsReducer = itemSlice.reducer;
export const {  } = itemSlice.actions;

