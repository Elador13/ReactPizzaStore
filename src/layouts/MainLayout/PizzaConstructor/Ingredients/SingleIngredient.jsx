import React, { Component } from "react";

class SingleIngredient extends Component {
  changeHandler = () => {
    console.log('change ingr.')
  };

  render() {
    const {value, label, count} = this.props.ingredient

    return (
      <li className="ingridients__item">
        <span className={`filling filling--${value}`}>
          {label}
        </span>

        <div className="counter counter--orange ingridients__counter">
          <button
            type="button"
            className="counter__button counter__button--disabled counter__button--minus"
          >
            <span className="visually-hidden">Меньше</span>
          </button>
          <input
            onChange={this.changeHandler}
            type="text"
            name="counter"
            className="counter__input"
            value={count}
          />
          <button
            type="button"
            className="counter__button counter__button--plus"
          >
            <span className="visually-hidden">Больше</span>
          </button>
        </div>
      </li>
    );
  }
}

export default SingleIngredient;
