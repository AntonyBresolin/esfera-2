import classNames from 'classnames';
import React, { useState } from 'react';
import '../../assets/styles/accordion.css';


const AskAccordion = ({ name, content }) => {
  const [accordion, setAccordion] = useState(false);

  const handleAccordion = () => {
    setAccordion(!accordion);
  }
  return (
    <div>
      <button className={classNames(
        "accordion rounded-2xl mb-3 text-xl text-primary font-semibold border-2 border-gray-300", {
        "accordionActive block": accordion
      })}
        onClick={() => handleAccordion()}>{name}</button>
      <div className={classNames("panel mb-2", {
        "block overflow-auto max-h-full": accordion,
        "hidden max-h-0": !accordion
      })}>
        <p className='text-secondary'>{content}</p>
      </div>
    </div>
  );
};

export default AskAccordion;
