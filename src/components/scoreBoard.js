import React from "react";
import "./scoreBoard.css";

export const ScoreBoard = ({scores}) => {
    return (
        <div className="scoreBoard">
            <div className="score">
                <h2>X</h2>
                <h3>{scores.xScore}</h3>
            </div>
            <div className="score">
                <h2>O</h2>
                <h3>{scores.oScore}</h3>
            </div>
        </div>
    )
}