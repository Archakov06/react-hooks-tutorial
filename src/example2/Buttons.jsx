import React from 'react';

const Buttons = ({ onPlus, onMinus }) => {
  console.log('Buttons render');

  return (
    <div>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  );
};

export default Buttons;
