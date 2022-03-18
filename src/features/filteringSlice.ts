import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface checkedListState {
  list: Array<string>;
  toggle: boolean;
}

const initialState: checkedListState = {
  list: [],
  toggle: false,
};

export const filteringSlice = createSlice({
  name: "filtering",
  initialState,
  reducers: {
    addCheckedOption: (state, action: PayloadAction<string>) => {
      const newList = [...state.list, action.payload];
      state.list = newList;
    },
    delCheckedOption: (state, action: PayloadAction<string>) => {
      const newList = state.list.filter((data) => data !== action.payload);
      state.list = newList;
    },
    resetCheckedList: (state) => {
      state.list = [];
    },
    setToggleFlag: (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
  },
});

export const {
  addCheckedOption,
  delCheckedOption,
  resetCheckedList,
  setToggleFlag,
} = filteringSlice.actions;

export default filteringSlice.reducer;
