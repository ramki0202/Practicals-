"use strict";

//Model Window Start
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const iButton = document.querySelector(".i-btn");
const closeBtn = document.querySelector(".close-modal");

iButton.addEventListener("click", function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
closeBtn.addEventListener("click", function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
});
// Model Windown end

//FigDice Game
//variables diclaration
const player1Score = document.querySelector(".player1-CurrentScore");
const player2Score = document.querySelector(".player2-CurrentScore");
const player1HighScore = document.querySelector(".player1-highscore");
const player2HighScore = document.querySelector(".player2-highscore");
const dice = document.querySelector(".dice");
const newGame = document.querySelector(".new-game");
const rollDice = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold");
let diceNumber = Math.trunc(Math.random() * 6) + 1;

// logics1(if the starting point is score will be 0 and dice is hidden)
player1HighScore.textContent = 0;
player2HighScore.textContent = 0;
player1Score.textContent = 0;
player2Score.textContent = 0;

//Problem Solving
