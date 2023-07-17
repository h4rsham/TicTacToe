import React from "react";
import "./box.css";

export const Box = ({ value, onClick }) => { // value is either "X" or "O" and onClick is a function that will be called when the box is clicked
  const style = value === "X" ? "box x" : "box o"; // if the value is "X", the box will have the class "box x", otherwise it will have the class "box o"
  return (
    <button className={style} onClick={onClick}>
      {value} 
    </button>
  ); // when the box is clicked, the onClick function will be called, the value of the box will be rendered inside the button
};
