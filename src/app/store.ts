import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice";
import foodSlice from "../features/foodSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    customers: customerReducer,
    food: foodSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
