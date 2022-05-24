import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDough } from "../../../../../store/reducers/doughReducer";

const DoughInput = ({ value, title, subtitle, className }) => {
  const dispatch = useDispatch();

  const doughData = useSelector((state) => state.dough);

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
        checked={value === doughData.selectedDough}
        className="visually-hidden"
      />
      <b>{title}</b>
      <span>{subtitle}</span>
    </label>
  );
};

export default DoughInput;
