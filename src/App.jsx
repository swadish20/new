// src/App.jsx
import { useState } from 'react';
import './App.css';

const COIN_SIDES = ['Heads', 'Tails'];

function App() {
  const [result, setResult] = useState(null);
  const [flipping, setFlipping] = useState(false);

  const tossCoin = () => {
    setFlipping(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 2);
      setResult(COIN_SIDES[randomIndex]);
      setFlipping(false);
    }, 1000);
  };

  return (
    <div className="App">
      <h1>🪙 Coin Toss</h1>
      <button onClick={tossCoin} disabled={flipping}>
        {flipping ? 'Flipping...' : 'Toss Coin'}
      </button>

      {result && (
        <div className="result">
          <h2>{result === 'Heads' ? '🪙 Heads!' : '🔄 Tails!'}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
