import React, { Fragment } from "react";
import "./Header.css";

const HeaderTitle = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const date = new Date();

  let today = (
    <p>
      {date.getDate()} {months[date.getMonth()]}
    </p>
  );

  return (
    <div className="timestamp-container">
      <h3>Lambda School</h3>
      <p>@LambdaSchool</p>
      {today}
    </div>
  );
};

export default HeaderTitle;
