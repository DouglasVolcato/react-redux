import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  value: string[];
}

const initialState: CustomerState = {
  value: [],
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addCustomer } = customerSlice.actions;

export default customerSlice.reducer;
