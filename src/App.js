import './App.css';
// import Box from './components/box';
import { Board } from './components/board';

function App() {
  const board = ["X","X","X","X","X","X","X","X","X"];
  return (
    <div>
      <Board board={board} onClick={null}/>
    </div>
  );
}

export default App;
