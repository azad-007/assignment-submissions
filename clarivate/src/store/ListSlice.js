import { createSlice } from "@reduxjs/toolkit";
const listSlice = createSlice({
  name: "list",
  initialState: {
    page: 1,
    listData: [],
  },
  reducers: {
    addUpdateList(state, action) {
      return { ...state, listData: [...state.listData, ...action.payload] };
    },
    addToFavorite(state, action) {
      const obj = state.listData.find((item) => item.id == action.payload);
      obj["isFavorite"] = true;
      return state;
    },
    removeFromFavorite(state, action) {
      const obj = state.listData.find((item) => item.id == action.payload);
      obj["isFavorite"] = false;
      return state;
    },
    updatePage(state, action) {
      return { ...state, page: action.payload };
    },
  },
});

export const { addUpdateList, addToFavorite, removeFromFavorite, updatePage } =
  listSlice.actions;
const listReducer = listSlice.reducer;
export default listReducer;
