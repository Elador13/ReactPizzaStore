import React from 'react';

const Total = ({selectedIngredients, selectedSize}) => {
  let total = selectedIngredients.reduce((acc, obj) => acc + (obj.price * obj.count), 0);

  switch (selectedSize) {
    case 'normal':
      total *= 2
      break
    case 'big':
      total *= 3
      break
  }

  return (
    <div className="content__result">
      <p>Total: {total} $</p>
      <button type="button" className="button button--disabled" disabled>
        Сook it!
      </button>
    </div>
  );
};

export default Total;
