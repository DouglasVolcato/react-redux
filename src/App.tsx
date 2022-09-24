import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import ReservationCard from "./ReservationCard";
import { useState } from "react";
import { addReservation } from "./features/reservationSlice";
import CustomerCard from "./CustomerCard";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customers.value);

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(event) => setReservationNameInput(event.target.value)}
            />
            <button onClick={() => handleAddReservations()}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((name) => (
            <CustomerCard name={name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
