import React from "react";
import DoughInput from "./DoughInput/DoughInput";

const Dough = ({ doughTypes, selectedDough }) => {

  return (
    <div className="content__dough">
      <div className="sheet">
        <h2 className="title title--small sheet__title">Choose dough</h2>
        <div className="sheet__content dough">
          {doughTypes.map((dough) => (
            <DoughInput
              key={dough.title}
              value={dough.value}
              title={dough.title}
              selectedDough={selectedDough}
              subtitle={dough.subtitle}
              className={dough.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dough;
