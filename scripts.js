var message = document.querySelector('.message');
//
// var mostRecentGuess = document.querySelector('.most-recent');
//
var clearInputButton = document.querySelector('.clear-input');
//
var resetGameButton = document.querySelector('.reset-game');

function getRandomNumber() {
  return Math.floor( Math.random() * 100) + 1;
}

// var getRandomNumber = 10;

var guessInput = document.getElementById('number-guess');

var submitGuessButton = document.querySelector('.submit-guess');

var randomNumber = getRandomNumber();

function gameReset (){
  document.location.reload(true);
}

function submitEvent(){
  var numberGuessed = parseInt(guessInput.value);
  console.log(randomNumber);
  console.log(numberGuessed);
  if (randomNumber === numberGuessed) {
    message.innerText = "Yay! You are Right";
  }

if (randomNumber < numberGuessed) {
   message.innerText = "You're guess is too high";
  }
  if (randomNumber > numberGuessed) {
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

resetGameButton.addEventListener('click', function(e) {
  gameReset();
});
//
// e.preventDefault --> Stops buttons from doing the things. e is inside the function.
