import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface checkedListState {
  list: Array<string>;
  filteringResetFlag: boolean;
}

const initialState: checkedListState = {
  list: [],
  filteringResetFlag: false,
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
    setFilteringResetFlag: (state, action: PayloadAction<boolean>) => {
      state.filteringResetFlag = action.payload;
    },
  },
});

export const {
  addCheckedOption,
  delCheckedOption,
  resetCheckedList,
  setFilteringResetFlag,
} = filteringSlice.actions;

export default filteringSlice.reducer;
