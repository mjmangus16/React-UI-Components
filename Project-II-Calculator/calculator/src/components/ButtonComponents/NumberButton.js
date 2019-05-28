import React from "react";
import "./Button.css";

const NumberButton = ({ num, handler }) => {
  return (
    <button className="number-button" onClick={() => handler(num)}>
      {num}
    </button>
  );
};

export default NumberButton;
