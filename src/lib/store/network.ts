import { createSlice } from "@reduxjs/toolkit";

export const networkSlice = createSlice({
  name: "network",
  initialState: {
    value: true,
  },
  reducers: {
    setNetworkOnline: (state) => {
      state.value = true;
    },
    setNetworkOffline: (state) => {
      state.value = false;
    },
  },
});

export const { setNetworkOnline, setNetworkOffline } = networkSlice.actions;

export default networkSlice.reducer;
