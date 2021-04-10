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
let scoreAddition = 0;
const player1HighScore = document.querySelector(".player1-highscore");
const player2HighScore = document.querySelector(".player2-highscore");
let dices = document.getElementById("dice");
const newGame = document.querySelector(".new-game");
const rollDice = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold");
var oldHighScore = 0;
// let images = Math.trunc(Math.random() * 6) + 1;
let images = [],
  index = 1;
images[0] = "/images/dice-1.png";
images[1] = "/images/dice-2.png";
images[2] = "/images/dice-3.png";
images[3] = "/images/dice-4.png";
images[4] = "/images/dice-5.png";
images[5] = "/images/dice-6.png";

rollDice.addEventListener("click", function () {
  for (var i = 0; i <= 100; i++) {
    index = Math.floor(Math.random() * images.length);
    dice.src = images[index];
    console.log(index);
    index++;
  }
  if (index == 1) {
    scoreAddition = 0;
    player1Score.textContent = 0;
  } else {
    scoreAddition = Number(scoreAddition) + index;
    player1Score.textContent = scoreAddition;
  }
});
hold.addEventListener("click", function () {
  oldHighScore = oldHighScore + scoreAddition;
  player1HighScore.textContent = oldHighScore;

  player1Score.textContent = 0;
  scoreAddition = 0;
});
// logics1(if the starting point is score will be 0 and dice is hidden)
player1HighScore.textContent = 0;
player2HighScore.textContent = 0;
player1Score.textContent = 0;
player2Score.textContent = 0;

//Problem Solving
/*

Task: 
    // 1). When user click RollDice button he will get random dice image
    // 2). to assign the value of random dice in the current score
    3). to add the current score in the same window 
   // 4). if user get 1 value he will lose all his/her scores
    5). if user click the hold button, his current score will be store in highscore board
    6). so the trun will be change to another user same thing will happend for current user.
    7). when any user get greater than or equal to 100 he/she will be Winner
    8). when user click newgame all score will be zero.




*/
