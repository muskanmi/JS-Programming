'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');

let scores, currentScore, activePlayer, playing;

//starting condition
const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    dice.classList.add('hidden'); 
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}
init();

const switchPlayer = function() {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    currentScore = 0;
    //change visual effects
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

//rolling dice functionality
buttonRoll.addEventListener('click', function() {
    if(playing) {
        // generating a random dice roll
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    //display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNum}.png`;
    //check for rolled 1: if true, switch to next player
    if(diceNum !== 1) {
        //add dice to current score
        currentScore += diceNum;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        // current0.textContent =  currentScore;
    }else {
        //switch to next player
        switchPlayer();
    }
    }
});

buttonHold.addEventListener('click', function() {
    if(playing) {
        //add current score to active players score
    scores[activePlayer] += currentScore;  // scores[1] = scores[1] + currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    //check if players score >= 100
    if(scores[activePlayer] >= 100){
        //finish the game
        playing = false;
        dice.classList.add('hidden'); 
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else {
        //switch to the next player
        switchPlayer();
    }
    }
});

buttonNew.addEventListener('click', init);