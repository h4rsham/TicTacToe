import React from "react";
import "./winnerFound.css";

export const WinnerFoundText = ({ winner }) => {
  return (
    <div className="winner-found">
      <h1>{winner} wins!</h1>
    </div>
  );
};
