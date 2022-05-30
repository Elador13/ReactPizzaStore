import React from "react";
import SingleIngredient from "./SingleIngredient";
import Sauce from "./Sauce/Sauce";

class Ingredients extends React.Component {

  handleChange = () => {}

  render() {
    const { ingredientsTypes, selectedIngredients, sauceTypes, selectedSauce } =
      this.props;

    return (
      <div className="content__ingridients">
        <div className="sheet">
          <h2 className="title title--small sheet__title">
            Choose ingredients
          </h2>

          <div className="sheet__content ingridients">
            <Sauce sauceTypes={sauceTypes} selectedSauce={selectedSauce} />

            <div className="ingridients__filling">
              <p>Ingredients:</p>

              <ul className="ingridients__list">
                {ingredientsTypes.map((ingr) => (
                  <SingleIngredient
                    key={ingr.value}
                    ingredient={ingr}
                    selectedIngredients={selectedIngredients}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ingredients;
