import React from "react";
import "./App.css";

import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";

const App = () => {
  return (
    <div
      style={{
        maxWidth: 650,
        margin: "100px auto auto",
        border: "solid black 1px",
        padding: "10px 10px 10px 0px"
      }}
    >
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
