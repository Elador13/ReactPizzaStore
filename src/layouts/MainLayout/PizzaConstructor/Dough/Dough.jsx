import React from 'react';
// import './Dough.scss'
import DoughInput from "./DoughInput/DoughInput";

const Dough = () => {
  const doughs = [
    {title: 'Light', subtitle: 'From durum wheat', className: 'dough__input dough__input--light'},
    {title: 'Large', subtitle: 'From durum wheat', className: 'dough__input dough__input--large'}
  ]

  return (
    <div className="content__dough">

      <div className="sheet">
        <h2 className="title title--small sheet__title">Choose dough</h2>

        <div className="sheet__content dough">

          {doughs.map(dough => (
            <DoughInput key={dough.title} title={dough.title} subtitle={dough.subtitle} className={dough.className}/>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Dough;
