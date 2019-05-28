import React from "react";
import "./Button.css";

const ActionButton = ({ action, equalsHandler, actionHandler }) => {
  return (
    <button
      className="action-button"
      onClick={action === "=" ? equalsHandler : () => actionHandler(action)}
    >
      {action}
    </button>
  );
};

export default ActionButton;
