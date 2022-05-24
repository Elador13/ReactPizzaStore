import React from 'react';

const Diameter = () => {
  return (
    <div className="content__diameter">
      <div className="sheet">
        <h2 className="title title--small sheet__title">Выберите размер</h2>

        <div className="sheet__content diameter">
          <label className="diameter__input diameter__input--small">
            <input type="radio" name="diameter" value="small" className="visually-hidden"/>
            <span>23 см</span>
          </label>
          <label className="diameter__input diameter__input--normal">
            <input type="radio" name="diameter" value="normal" className="visually-hidden" checked/>
            <span>32 см</span>
          </label>
          <label className="diameter__input diameter__input--big">
            <input type="radio" name="diameter" value="big" className="visually-hidden"/>
            <span>45 см</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Diameter;
