import React from "react";
import "./scoreBoard.css";

export const ScoreBoard = ({scores, xPlaying}) => { // used to render the score board
    const {xScore, oScore} = scores; // destructure the scores object into xScore and oScore

    return (
        <div className="scoreboard">
            <span className={`score x-score ${!xPlaying && "inactive"}`}> X - {xScore}</span>
            <span className={`score o-score ${xPlaying && "inactive"}`}> O - {oScore}</span>
        </div>
    ) // render the score board with the xScore and oScore which has been destructured from the scores object from App.js
}