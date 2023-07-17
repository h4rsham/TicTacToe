import React, { useState } from 'react';

import './App.css';
import { Board } from './components/board';

function App() {

  const winConditions = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 4, 8], // diagonal top left to bottom right
    [2, 4, 6], // diagonal top right to bottom left
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8] // right column
  ];


  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlayer, setXPlayer] = useState(true);

  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xPlayer === true ? 'X' : 'O';
      } else {
        return value;
      }
    });

    checkForWinner(updatedBoard);
    setBoard(updatedBoard);

    setXPlayer(!xPlayer);
  };

  const checkForWinner = (board) => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(board[a]);
        return board[a];
      } 
    }
  };



  return (
    <div>
      <Board board={board} onClick={handleBoxClick}/>
    </div>
  );
}

export default App;
