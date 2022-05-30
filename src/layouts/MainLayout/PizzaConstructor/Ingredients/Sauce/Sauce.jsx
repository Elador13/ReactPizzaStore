import React from "react";
import {useDispatch} from "react-redux";
import {setSauce} from "../../../../../store/reducers/pizzaConstructorReducer";

function Sauce({ sauceTypes, selectedSauce }) {
  const dispatch = useDispatch()

  const changeHandler = (event) => {
    dispatch(setSauce(event.target.value));
  };

  return (
    <div className="ingridients__sauce">
      <p>Basic sauce:</p>

      {sauceTypes.map((sauce) => (
        <label key={sauce.value} className="radio ingridients__input">
          <input
            onChange={changeHandler}
            type="radio"
            name="sauce"
            value={sauce.value}
            checked={sauce.value === selectedSauce}
          />
          <span>{sauce.label}</span>
        </label>
      ))}

      {/*<label className="radio ingridients__input">*/}
      {/*  <input type="radio" name="sauce" value="creamy"/>*/}
      {/*  <span>Сливочный</span>*/}
      {/*</label>*/}
    </div>
  );
}

export default Sauce;
