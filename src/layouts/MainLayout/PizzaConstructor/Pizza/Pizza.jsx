import React from 'react';

const Pizza = () => {
  return (
    <div className="content__pizza">
      <label className="input">
        <span className="visually-hidden">Название пиццы</span>
        <input type="text" name="pizza_name" placeholder="Введите название пиццы"/>
      </label>

      <div className="content__constructor">
        <div className="pizza pizza--foundation--big-tomato">
          <div className="pizza__wrapper">
            <div className="pizza__filling pizza__filling--ananas">
              <div className="pizza__filling pizza__filling--bacon"/>
              <div className="pizza__filling pizza__filling--cheddar">
              </div>
            </div>
          </div>

          <div className="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" className="button button--disabled" disabled>Готовьте!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
