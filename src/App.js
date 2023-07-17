import React, { useState } from "react";

import "./App.css";
import { Board } from "./components/board/board";
import { ScoreBoard } from "./components/scoreBoard/scoreBoard";
import { ResetButton } from "./components/resetButton/resetButton";
import { WinnerFoundText } from "./components/winnerFound/winnerFound";

function App() {
  const winConditions = [ // these are the win conditions for the game
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 4, 8], // diagonal top left to bottom right
    [2, 4, 6], // diagonal top right to bottom left
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
  ];

  const [board, setBoard] = useState(Array(9).fill(null)); // board is an array of 9 elements that will be used to render the playing board
  const [xPlaying, setXPlaying] = useState(true); // xPlaying is a boolean that will be used to determine which player is playing
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 }); // scores is an object that will be used to keep track of the score
  const [gameOver, setGameOver] = useState(false); // gameOver is a boolean that will be used to determine if the game is over
  const [winnerFound, setWinnerFound] = useState(false); // winnerFound is a boolean that will be used to determine if a winner has been found

  const handleBoxClick = (boxIndex) => { // boxIndex is the index of the box that was clicked and so will be used to update the board array
    const updatedBoard = board.map((value, index) => { 
      if (index === boxIndex) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkForWinner(updatedBoard); // check if there is a winner after the board has been updated
    if (winner) { // if there is a winner, update the scores and set winnerFound to true to display the winnerFound component/message
      if (winner === "X") {
        setScores({ ...scores, xScore: scores.xScore + 1 }); // update the xScores object with current xScore + 1
        setWinnerFound(true); // set winnerFound to true to display the winnerFound component/message
      } else {
        setScores({ ...scores, oScore: scores.oScore + 1 }); // update the oScores object with current oScore + 1
        setWinnerFound(true); 
      }
    }

    setBoard(updatedBoard); // update the board array with the updatedBoard array every time a box is clicked
    setXPlaying(!xPlaying); // update xPlaying to the opposite of what it currently is so that turns are alternated
  };

  const checkForWinner = (board) => { // this function checks if there is a winner by looping over the winConditions array and checking if the board array matches any of the winConditions
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setGameOver(true); // set gameOver to true so that the current game is over and the board cannot be clicked
        return board[a]; // return the value of the winning box so that it can be used update the score and therefore display the winnerFound message/component
      }
    }
  };

  const resetBoard = () => { // this function resets the board to its initial state and sets gameOver and winnerFound to false so that the game can be played again
    setGameOver(false); // set gameOver to false so that the board can be clicked again
    setWinnerFound(false); // set winnerFound to false so that the winnerFound message/component is no longer displayed
    setBoard(Array(9).fill(null)); // reset the board array to its initial state
  };

  return (
    <div>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
      {winnerFound && <WinnerFoundText winner={xPlaying ? "O" : "X"} />}
    </div>
  );
}

export default App;
