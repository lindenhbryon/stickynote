import React from 'react';
import '../../App.css';
import Header from '../global/Header';
import Board from '../board/Board';
function App() {
  return (
    <div className="App">
      {Header}
      <Board />
    </div>
  );
}

export default App;
