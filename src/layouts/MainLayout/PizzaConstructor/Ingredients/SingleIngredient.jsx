import React, { Component } from "react";

class SingleIngredient extends Component {

  render() {
    const {value, label, count} = this.props.ingredient

    return (
      <li className="ingridients__item">
        <span className={`filling filling--${value}`}>
          {label}
        </span>

        <div className="counter counter--orange ingridients__counter">
          <button
            disabled={count === 0}
            onClick={() => this.props.onChange(count - 1)}
            type="button"
            className={`counter__button counter__button--minus${count === 0 ? '--disabled' : ''}`}
          >
            <span className="visually-hidden">Less</span>
          </button>
          <input
            onChange={e => this.props.onChange(parseInt(e.target.value))}
            type="text"
            name="counter"
            className="counter__input"
            value={count}
          />
          <button
            disabled={count === 3}
            onClick={() => this.props.onChange(count + 1)}
            type="button"
            className={`counter__button counter__button--plus${count === 3 ? '--disabled' : ''}`}
          >
            <span className="visually-hidden">More</span>
          </button>
        </div>
      </li>
    );
  }
}

export default SingleIngredient;
