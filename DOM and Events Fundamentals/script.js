'use strict';
// project 1: Guess My Number!

/*
// document.querySelector('.message');
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

// selecting and manipulating the events
document.querySelector('.message').textContent = 'Correct Number!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

// handling click events
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    }
    //player wins
    else if(guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Number!"
        //styling css
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //when guess is wrong (DRY code)
    else if(guess !== secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? "Too High!" : "Too Low!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
    }
    // // guess is too high
    // else if(guess > secretNumber) {
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too High!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // // guess is too low
    // else if(guess < secretNumber) {
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too Low!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
}); 

// again button logic
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

// implemeting the Game Logic
// manipulating css styles
// high scores logic
// refactoring our code (by using function) DRY code