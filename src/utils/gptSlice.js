import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptToggle",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleChangeClick: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleChangeClick } = gptSlice.actions;
export default gptSlice.reducer;
