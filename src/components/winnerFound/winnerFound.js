import React from "react";
import "./winnerFound.css";

export const WinnerFoundText = ({ winner }) => { // winner is either "X" or "O"
  const winnerClass = winner === "X" ? "x-winner" : "o-winner"; // this line sets the class of the div to either "x-winner" or "o-winner" depending on the value of the winner prop
  return (
    <div className={`winner-found ${winnerClass}`}>
      <h1>{winner} wins!</h1>
    </div>
  ); // render the winnerFound div with the winnerClass css class and the winner prop inside an h1 tag
};
