import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface foodState {
  value: {food: string, customer: string}[];
}

const initialState: foodState = {
  value: [{food: "string", customer: "string"}, {food: "string", customer: "string"}],
};

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFood: (state, action: PayloadAction<{food: string, customer: string}>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addFood } = foodSlice.actions;

export default foodSlice.reducer;
