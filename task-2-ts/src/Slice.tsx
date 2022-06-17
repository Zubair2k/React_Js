import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "WholeSale Shop",

  initialState: {
    mat: [{ Product: "None", Quantity: 1, Price: 0, Total: 0,Value: 0 }]
  },

  reducers: {
    update: (state, action) => {
      state.mat = action.payload.mat;
    }
  }
});

export const { update } = userSlice.actions;
export default userSlice.reducer;