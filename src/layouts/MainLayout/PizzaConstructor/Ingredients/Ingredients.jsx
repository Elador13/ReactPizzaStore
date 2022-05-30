import React from "react";
import SingleIngredient from "./SingleIngredient";
import Sauce from "./Sauce/Sauce";
import {connect} from "react-redux";
import {setIngredientCount} from "../../../../store/reducers/pizzaConstructorReducer";

class Ingredients extends React.Component {

  handleChange = (title, count) => {
    //TODO: Lazy input
    if (isNaN(count) || count < 0) count = 0
    if (count > 3) count = 3
    this.props.setIngredientCount(title, count)
  };

  render() {
    const { ingredientsTypes, sauceTypes, selectedSauce } =
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
                    onChange={(e) => this.handleChange(ingr.value, e)}
                    key={ingr.value}
                    ingredient={ingr}
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



export default connect(() => ({}), {
  setIngredientCount
})(Ingredients);
