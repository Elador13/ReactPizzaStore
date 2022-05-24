import React from "react";
import { sizeTypes } from "../../../../pizzaData";
import {useDispatch, useSelector} from "react-redux";
import {setSize} from "../../../../store/reducers/sizeReducer";

const Size = () => {
  const dispatch = useDispatch()
  const sizeData = useSelector(state => state.size)

  const changeHandler = (event) => {
    dispatch(setSize(event.target.value));
  };

  const mapSizes = sizeTypes.map((size) => (
    <label
      key={size.value}
      className={`diameter__input diameter__input--${size.value}`}
    >
      <input
        onChange={changeHandler}
        type="radio"
        name="diameter"
        value={size.value}
        checked={size.value === sizeData.selectedSize}
        className="visually-hidden"
      />
      <span>{size.label}</span>
    </label>
  ));

  return (
    <div className="content__diameter">
      <div className="sheet">
        <h2 className="title title--small sheet__title">Choose size</h2>

        <div className="sheet__content diameter">
          {mapSizes}

          {/*<label className="diameter__input diameter__input--small">*/}
          {/*  <input type="radio" name="diameter" value="small" className="visually-hidden"/>*/}
          {/*  <span>23 cm</span>*/}
          {/*</label>*/}
          {/*<label className="diameter__input diameter__input--normal">*/}
          {/*  <input type="radio" name="diameter" value="normal" className="visually-hidden" checked/>*/}
          {/*  <span>32 cm</span>*/}
          {/*</label>*/}
          {/*<label className="diameter__input diameter__input--big">*/}
          {/*  <input type="radio" name="diameter" value="big" className="visually-hidden"/>*/}
          {/*  <span>45 cm</span>*/}
          {/*</label>*/}
        </div>
      </div>
    </div>
  );
};

export default Size;
