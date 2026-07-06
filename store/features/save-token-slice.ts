import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const saveTokenSlice = createSlice({
  name: "token",
  initialState: {
    token: "",
  },
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = saveTokenSlice.actions;
export default saveTokenSlice.reducer;
