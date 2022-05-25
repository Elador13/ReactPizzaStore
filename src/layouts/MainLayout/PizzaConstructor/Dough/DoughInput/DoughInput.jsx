import React from "react";
import { useDispatch } from "react-redux";
import {setDough} from "../../../../../store/reducers/pizzaConstructorReducer";


const DoughInput = ({ value, title, subtitle, className, selectedDough }) => {
  const dispatch = useDispatch();

  // const doughData = useSelector((state) => state.pizzaConstructor.selectedDough);

  const changeHandler = (event) => {
    dispatch(setDough(event.target.value));
  };

  return (
    <label className={className}>
      <input
        onChange={changeHandler}
        type="radio"
        name="dough"
        value={value}
        checked={value === selectedDough}
        className="visually-hidden"
      />
      <b>{title}</b>
      <span>{subtitle}</span>
    </label>
  );
};

export default DoughInput;
