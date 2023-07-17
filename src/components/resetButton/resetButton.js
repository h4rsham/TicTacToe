import React from "react";

import "./resetButton.css";

export const ResetButton = ({ resetBoard }) => { // resetBoard is a function that will be called when the button is clicked
  return (
    <button className="reset-button" onClick={resetBoard}>
      Reset Board
    </button>
  ); // when the button is clicked, the resetBoard function will be called which has been passed down from App.js
};
