import React from "react";

import "./resetButton.css";

export const ResetButton = ({resetBoard}) => {
    return (
        <button className="reset-button" onClick={resetBoard}>Reset Board</button>
    )
}
