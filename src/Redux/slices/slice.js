import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
  currentVal: "",
  edit: ""
}

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    itemAdded: (state) => {
      const item = {
        id: Math.random() * 100,
        name: state.currentVal,
      };
      if (state.currentVal.length) {
        state.items.push(item)
      }

      state.currentVal = ""
      console.log(state.currentVal)
      state.count += 1;
    },
    itemRemoved: (state, action) => {
      console.log(action.payload)
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.count -= 1;
    },
    itemEdited: (state) => {

      const editedID = state.items.find(e => e.id === state.edit.id);

      editedID.name = state.currentVal
      console.log(state.edit.id)

    },

    edit: (state, action) => {
      state.edit = action.payload
      state.currentVal = action.payload.name


    },
    updateValue: (state, action) => {
      state.currentVal = action.payload;

    }
  },
})


export const itemsReducer = itemSlice.reducer;
export const { itemAdded, itemRemoved, updateValue, itemEdited, edit } = itemSlice.actions;

