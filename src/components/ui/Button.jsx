import React from 'react';

const Button = (props) => {
  return (
    <button
    
      className={`bg-pink-900 text-white cursor-pointer border-solid border-[#4f005f] border hover:bg-pink-800 hover:border-pink-800 active:bg-pink-800 active:border-pink-800 focus:outline-none ${props.className}`}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;