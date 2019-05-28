import React, { Component } from "react";
import "./App.css";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

class App extends Component {
  state = {
    displayData: 0,
    action: "",
    previousNum: ""
  };

  clearHandler = () => {
    this.setState({ displayData: 0, action: "", previousNum: "" });
  };

  numberHandler = num => {
    if (this.state.displayData === 0 || this.state.previousNum !== "") {
      this.setState({ displayData: num });
    } else {
      this.setState({ displayData: `${this.state.displayData}${num}` });
    }
  };

  actionHandler = action => {
    if (action === "/") {
      this.setState({ action: "/", previousNum: this.state.displayData });
    } else if (action === "X") {
      this.setState({ action: "X", previousNum: this.state.displayData });
    } else if (action === "-") {
      this.setState({ action: "-", previousNum: this.state.displayData });
    } else if (action === "+") {
      this.setState({ action: "+", previousNum: this.state.displayData });
    }
  };

  equalsHandler = () => {
    let equals;

    if (this.state.action === "/") {
      equals = this.state.previousNum / this.state.displayData;
      this.setState({ displayData: equals });
    } else if (this.state.action === "X") {
      equals = this.state.previousNum * this.state.displayData;
      this.setState({ displayData: equals });
    } else if (this.state.action === "-") {
      equals = this.state.previousNum - this.state.displayData;
      this.setState({ displayData: equals });
    } else if (this.state.action === "+") {
      equals = this.state.previousNum + this.state.displayData;
      this.setState({ displayData: equals });
    }
  };

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  actions = ["/", "X", "-", "+", "="];

  render() {
    const {
      numbers,
      actions,
      clearHandler,
      numberHandler,
      actionHandler,
      equalsHandler
    } = this;
    const { displayData } = this.state;

    return (
      <div className="calculator-container">
        <CalculatorDisplay data={displayData} />
        <div className="buttons-container">
          <div className="numbers-container">
            <button className="large-button" onClick={clearHandler}>
              CLEAR
            </button>
            {numbers.map(num => (
              <NumberButton
                num={num}
                handler={numberHandler}
                key={`number-${numbers.indexOf(num)}`}
              />
            ))}
            <button className="large-button" onClick={() => numberHandler(0)}>
              0
            </button>
          </div>
          <div className="actions-container">
            {actions.map(act => (
              <ActionButton
                action={act}
                actionHandler={actionHandler}
                equalsHandler={equalsHandler}
                key={`action-${actions.indexOf(act)}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
