import React, { useEffect } from "react";
import Dough from "./Dough/Dough";
import Size from "./Size/Size";
import Spinner from "../../../components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzaData } from "../../../store/reducers/pizzaConstructorReducer";
import Ingredients from "./Ingredients/Ingredients";
import Pizza from "./Pizza/Pizza";

const PizzaConstructor = () => {
  const dispatch = useDispatch();

  const pizzaData = useSelector((state) => state.pizzaConstructor);

  useEffect(() => {
    dispatch(fetchPizzaData());
  }, []);

  return (
    <main className="content">
      {pizzaData.loading ? (
        <Spinner />
      ) : (
        <form action="#" method="post">
          <div className="content__wrapper">
            <h1 className="title title--big">Pizza Constructor</h1>

            <Dough
              doughTypes={pizzaData.doughTypes}
              selectedDough={pizzaData.selectedDough}
            />

            <Size
              sizeTypes={pizzaData.sizeTypes}
              selectedSize={pizzaData.selectedSize}
            />

            {/*Class component*/}
            <Ingredients
              ingredientsTypes={pizzaData.ingredientsTypes}
              sauceTypes={pizzaData.sauceTypes}
              selectedSauce={pizzaData.selectedSauce}
            />

            <Pizza pizzaData={pizzaData}/>
          </div>
        </form>
      )}
    </main>
  );
};

export default PizzaConstructor;
