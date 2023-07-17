import React from "react";
import { Box } from "../box/box";
import "./board.css";

export const Board = ({ board, onClick }) => { // board is an array of 9 elements that will be used to render the playing board
  return (
    <div className="board">
      {board.map((value, index) => { // map over the board array from App.js and render a Box component for each element
        return (
          <Box value={value} onClick={() => value === null && onClick(index)} /> // renders a Box component with a value prop and an onClick prop
        );
      })}
    </div>
  );
};
