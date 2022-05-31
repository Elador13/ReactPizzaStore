import React, { useState } from "react";

const Pizza = ({ pizzaData }) => {
  const { ingredientsTypes, selectedDough, selectedSauce } = pizzaData;

  const dough = selectedDough === "large" ? "big" : "small";

  const [pizzaName, setPizzaName] = useState("");

  const selectedIngredients = ingredientsTypes.filter((ingr) => ingr.count > 0);

  return (
    <div className="content__pizza">
      <label className="input">
        <span className="visually-hidden">Pizza name</span>
        <input
          onChange={(event) => setPizzaName(event.target.value)}
          value={pizzaName}
          type="text"
          name="pizza_name"
          placeholder="Enter your pizza name"
        />
      </label>

      <div className="content__constructor">
        <div className={`pizza pizza--foundation--${dough}-${selectedSauce}`}>
          <div className="pizza__wrapper">
            {selectedIngredients.map((ingr) => (
              //First ingredient
              <div
                key={ingr.value}
                className={`pizza__filling pizza__filling--${ingr.value}`}
              >
                {ingr.count === 2 ? (
                  //Second ingredient
                  <div
                    className={`pizza__filling pizza__filling--second pizza__filling--${ingr.value}`}
                  />
                ) : (
                  ""
                )}
                {ingr.count === 3 ? (
                  //Third ingredient
                  <div
                    className={`pizza__filling pizza__filling--third pizza__filling--${ingr.value}`}
                  />
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="content__result">
        <p>Total: 0 $</p>
        <button type="button" className="button button--disabled" disabled>
          Сook it!
        </button>
      </div>

    </div>
  );
};

export default Pizza;
