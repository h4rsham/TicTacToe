import React from "react";
import "./scoreBoard.css";

export const ScoreBoard = ({scores, xPlayer}) => {
    const {xScore, oScore} = scores;

    return (
        <div className="scoreBoard">
            <span> X - {xScore}</span>
            <span> O - {oScore}</span>
        </div>
    )
}