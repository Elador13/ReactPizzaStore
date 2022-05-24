import React from 'react';
// import './Dough.scss'
import {doughTypes} from "../../../../pizzaData";
import DoughInput from "./DoughInput/DoughInput";

const Dough = () => {

  return (
    <div className="content__dough">
      <div className="sheet">
        <h2 className="title title--small sheet__title">Choose dough</h2>
        <div className="sheet__content dough">
          {doughTypes.map(dough => (
            <DoughInput key={dough.title} value={dough.value} title={dough.title} subtitle={dough.subtitle} className={dough.className}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dough;
