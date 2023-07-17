import React, { useState } from "react";

import "./App.css";
import { Board } from "./components/board/board";
import { ScoreBoard } from "./components/scoreBoard/scoreBoard";
import { ResetButton } from "./components/resetButton/resetButton";

function App() {
  const winConditions = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 4, 8], // diagonal top left to bottom right
    [2, 4, 6], // diagonal top right to bottom left
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkForWinner(updatedBoard);
    if (winner) {
      if (winner === "X") {
        setScores({ ...scores, xScore: scores.xScore + 1 });
        alert("X is the winner!");
      } else {
        setScores({ ...scores, oScore: scores.oScore + 1 });
        alert("O is the winner!");
      }
    }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const checkForWinner = (board) => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setGameOver(true);
        console.log(board[a]);
        return board[a];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
