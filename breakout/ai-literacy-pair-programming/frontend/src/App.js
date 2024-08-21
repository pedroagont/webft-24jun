import { useState, useEffect } from 'react';

function App() {
  const [attemptsLeft, setAttemptsLeft] = useState(5);
  const [message, setMessage] = useState('');
  const [guess, setGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = async () => {
    const response = await fetch('http://localhost:5000/start-game', {
      method: 'POST',
    });
    const data = await response.json();
    setAttemptsLeft(data.attemptsLeft);
    setMessage('Game started! Make your guess.');
    setGameOver(false);
    setGameWon(false);
    setGuess('');
  };

  const handleGuess = async () => {
    if (gameOver) return;

    const response = await fetch('http://localhost:5000/guess', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ guess: parseInt(guess, 10) }),
    });
    const data = await response.json();

    setAttemptsLeft(data.attemptsLeft);
    setMessage(data.message);

    if (data.win) {
      setGameWon(true);
      setGameOver(true);
    } else if (data.loss) {
      setGameOver(true);
    }
  };

  const handleRestart = async () => {
    await startGame();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Guess the Number Game</h1>
      <p>{message}</p>
      <p>Attempts Left: {attemptsLeft}</p>

      {!gameOver && (
        <div>
          <input
            type='number'
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder='Enter your guess'
          />
          <button onClick={handleGuess}>Submit Guess</button>
        </div>
      )}

      {gameOver && (
        <div>
          {gameWon ? (
            <p>Congratulations! You won the game.</p>
          ) : (
            <p>Game Over. You lost.</p>
          )}
          <button onClick={handleRestart}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default App;
