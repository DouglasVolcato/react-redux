import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "./features/reservationSlice";
import {addCustomer} from "./features/customerSlice"

interface ReservatiCardTypes {
  name: string;
  index: number;
}

export default function ReservationCard({ name, index }: ReservatiCardTypes) {
  const dispatch = useDispatch();

  const handleAddCustomers = () => {
    dispatch(addCustomer(name))
    dispatch(removeReservation(index));
}

  return (
    <div>
      <div
        className="reservation-card-container"
        onClick={() => handleAddCustomers()}
      >
        {name}
      </div>
    </div>
  );
}
