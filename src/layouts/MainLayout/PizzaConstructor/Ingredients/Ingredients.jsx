import React from 'react';

const Ingredients = () => {
  return (
    <div className="content__ingridients">
      <div className="sheet">
        <h2 className="title title--small sheet__title">Выберите ингридиенты</h2>

        <div className="sheet__content ingridients">

          <div className="ingridients__sauce">
            <p>Основной соус:</p>

            <label className="radio ingridients__input">
              <input type="radio" name="sauce" value="tomato" checked/>
              <span>Томатный</span>
            </label>
            <label className="radio ingridients__input">
              <input type="radio" name="sauce" value="creamy"/>
              <span>Сливочный</span>
            </label>
          </div>

          <div className="ingridients__filling">
            <p>Начинка:</p>

            <ul className="ingridients__list">
              <li className="ingridients__item">
                <span className="filling filling--mushrooms">Грибы</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
              <li className="ingridients__item">
                <span className="filling filling--cheddar">Чеддер</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
              <li className="ingridients__item">
                <span className="filling filling--salami">Салями</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
              <li className="ingridients__item">
                <span className="filling filling--ham">Ветчина</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
              <li className="ingridients__item">
                <span className="filling filling--ananas">Ананас</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
              <li className="ingridients__item">
                <span className="filling filling--bacon">Бекон</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
              <li className="ingridients__item">
                <span className="filling filling--onion">Лук</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
              <li className="ingridients__item">
                <span className="filling filling--chile">Чили</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
              <li className="ingridients__item">
                <span className="filling filling--jalapeno">Халапеньо</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
              <li className="ingridients__item">
                <span className="filling filling--olives">Маслины</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
              <li className="ingridients__item">
                <span className="filling filling--tomatoes">Томаты</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
              <li className="ingridients__item">
                <span className="filling filling--salmon">Лосось</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
              <li className="ingridients__item">
                <span className="filling filling--mozzarella">Моцарелла</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
              <li className="ingridients__item">
                <span className="filling filling--parmesan">Пармезан</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
              <li className="ingridients__item">
                <span className="filling filling--blue_cheese">Блю чиз</span>

                <div className="counter counter--orange ingridients__counter">
                  <button type="button"
                          className="counter__button counter__button--disabled counter__button--minus">
                    <span className="visually-hidden">Меньше</span>
                  </button>
                  <input type="text" name="counter" className="counter__input" value="0"/>
                  <button type="button" className="counter__button counter__button--plus">
                    <span className="visually-hidden">Больше</span>
                  </button>
                </div>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Ingredients;
