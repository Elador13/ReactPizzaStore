import React from 'react';
import Dough from "./Dough/Dough";
import Diameter from "./Diameter/Diameter";
import Ingredients from "./Ingredients/Ingredients";
import Pizza from "../Pizza/Pizza";
// import './PizzaConstructor.scss'

const PizzaConstructor = () => {

  return (
    <main className="content">
      <form action="#" method="post">
        <div className="content__wrapper">
          <h1 className="title title--big">Pizza Constructor</h1>

          <Dough/>

          {/*<Diameter/>*/}

          {/*<Ingredients/>*/}

          {/*<Pizza/>*/}

        </div>
      </form>
    </main>
  )
};

export default PizzaConstructor;