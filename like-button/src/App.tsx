import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>TypeScriptはいいぞ</p>
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {
  const [cnt, setCnt] = useState(999);
  const handleClick = () => {
    setCnt(cnt + 1);
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      😻 {cnt}
    </span>
  );
}

export default App;
