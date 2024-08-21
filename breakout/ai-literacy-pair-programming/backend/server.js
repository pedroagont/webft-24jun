const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Store the game state in memory (for simplicity)
let gameState = {};

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// Start a new game
app.post('/start-game', (req, res) => {
  const randomNumber = generateRandomNumber();
  console.log(randomNumber);
  gameState = {
    randomNumber,
    attemptsLeft: 5,
  };
  res.json({ attemptsLeft: gameState.attemptsLeft });
});

// Handle player's guess
app.post('/guess', (req, res) => {
  const { guess } = req.body;
  const { randomNumber, attemptsLeft } = gameState;

  if (attemptsLeft <= 0) {
    return res.status(400).json({
      message: `You've run out of attempts! The correct number was ${randomNumber}.`,
      attemptsLeft: 0,
      loss: true,
    });
  }

  gameState.attemptsLeft -= 1;

  if (guess < randomNumber) {
    res.json({ message: 'Too low!', attemptsLeft: gameState.attemptsLeft });
  } else if (guess > randomNumber) {
    res.json({ message: 'Too high!', attemptsLeft: gameState.attemptsLeft });
  } else {
    res.json({
      message: `Correct! You guessed the number in ${
        5 - gameState.attemptsLeft
      } attempts.`,
      attemptsLeft: gameState.attemptsLeft,
      win: true,
    });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
