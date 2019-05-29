import React from "react";
import "./Display.css";

const CalculatorDisplay = ({ data }) => {
  return (
    <div className="calculator-display">
      <h1>{data}</h1>
    </div>
  );
};

export default CalculatorDisplay;
