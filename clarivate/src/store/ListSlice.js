import { createSlice } from "@reduxjs/toolkit";
const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addUpdateList(state, action) {
      console.log(action);
      return [...state, ...action.payload];
    },
    addToFavorite(state, action) {
      const obj = state.find((item) => item.id == action.payload);
      obj["isFavorite"] = true;
      return state;
    },
    removeFromFavorite(state, action) {
      const obj = state.find((item) => item.id == action.payload);
      obj["isFavorite"] = false;
      return state;
    },
  },
});

export const { addUpdateList, addToFavorite, removeFromFavorite } =
  listSlice.actions;
const listReducer = listSlice.reducer;
export default listReducer;
