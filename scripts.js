var message = document.querySelector('.message');
//
// var mostRecentGuess = document.querySelector('.most-recent');
//
var clearInputButton = document.querySelector('.clear-input');
//
var resetGameButton = document.querySelector('.reset-game');

var getRandomNumber = Math.floor( Math.random() * 100) + 1;

// var getRandomNumber = 10;

var guessInput = document.getElementById('number-guess');

var submitGuessButton = document.querySelector('.submit-guess');

function submitEvent(){
  var numberGuessed = parseInt(guessInput.value);
  console.log(getRandomNumber);
  console.log(numberGuessed);
  if (getRandomNumber === numberGuessed) {
    message.innerText = "Yay! You are Right";
  }

if (getRandomNumber < numberGuessed) {
   message.innerText = "You're guess is too high";
  }
  if (getRandomNumber > numberGuessed) {
    message.innerText = "You're guess is too low";
   }
}

submitGuessButton.addEventListener('click', function(e) {
  submitEvent();
});

function clearInput() {
  guessInput.value="";
}

clearInputButton.addEventListener('click', function(e) {
  clearInput();
});

function resetGame () {
  guessInput.value="";
}

resetGameButton.addEventListener('click', function(e) {
  resetGame();
});
//
// e.preventDefault --> Stops buttons from doing the things. e is inside the function.
