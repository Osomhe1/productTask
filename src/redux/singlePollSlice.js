import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItem: null,
};

const SinglePoll = createSlice({
  name: "SinglePoll",
  initialState,
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setSelectedItem } = SinglePoll.actions;
export default SinglePoll.reducer;
