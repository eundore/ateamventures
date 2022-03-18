import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EstimateRequestCard } from "../utils/CommonInterface";

export interface cardListState {
  list: Array<EstimateRequestCard>;
}

const initialState: cardListState = {
  list: [],
};

export const estimateRequestCardSlice = createSlice({
  name: "estimateRequestCard",
  initialState,
  reducers: {
    setcardList: (state, action: PayloadAction<Array<EstimateRequestCard>>) => {
      state.list = [...action.payload];
    },
  },
});

export const { setcardList } = estimateRequestCardSlice.actions;

export default estimateRequestCardSlice.reducer;
