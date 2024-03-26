import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addFavourite(state, action) {
      return [...state, action.payload];
    },
    removeFavourite(state, action) {
      state = state.filter((item) => item.id != action.payload);
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
const favouriteReducer = favouriteSlice.reducer;
export default favouriteReducer;
