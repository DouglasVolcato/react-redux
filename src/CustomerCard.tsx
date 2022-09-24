import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import {addFood} from "./features/foodSlice"

interface CustomerCardTypes {
  name: string;
}

export default function CustomerCard({ name }: CustomerCardTypes) {

  const [newFood, setNewFood] = useState({food: "", customer: name})

  const foods = useSelector((state: RootState) => state.food.value);

  const dispatch = useDispatch()

  const handleAddFood = () => {
    dispatch(addFood(newFood))
    setNewFood({food: "", customer: name})
  }

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {foods.map((item) => (
            item.customer === name ? <p>{item.food}</p> : <span></span>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input value={newFood.food} onChange={(event) => setNewFood({customer: name, food: event.target.value})}/>
          <button onClick={() => handleAddFood()}>Add</button>
        </div>
      </div>
    </div>
  );
}
