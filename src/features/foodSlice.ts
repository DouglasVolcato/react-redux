import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface foodState {
  value: { food: string; customer: number }[];
}

const initialState: foodState = {
  value: [],
};

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFood: (
      state,
      action: PayloadAction<{ food: string; customer: number }>
    ) => {
      state.value.push(action.payload);
    },
  },
});

export const { addFood } = foodSlice.actions;

export default foodSlice.reducer;
