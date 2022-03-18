import { configureStore } from "@reduxjs/toolkit";
import estimateRequestCardReducer from "../features/estimateRequestCardSlice";
import filteringReducer from "../features/filteringSlice";

export const store = configureStore({
  reducer: {
    estimateRequestCard: estimateRequestCardReducer,
    filtering: filteringReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
