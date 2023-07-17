import React, { useState } from 'react';

import './App.css';
import { Board } from './components/board';

function App() {

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
    setBoard(updatedBoard);

    setXPlayer(!xPlayer);
  };



  return (
    <div>
      <Board board={board} onClick={handleBoxClick}/>
    </div>
  );
}

export default App;
