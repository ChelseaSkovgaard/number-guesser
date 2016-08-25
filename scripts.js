var guessInput = document.getElementById('number-guess');

var randomNumber = getRandomNumber();

var submitGuessButton = document.querySelector('.submit-guess');

var clearInputButton = document.querySelector('.clear-input');

var resetGameButton = document.querySelector('.reset-game');

var lastGuess = document.querySelector('.last-guess');

var message = document.querySelector('.message');

var messageRange = document.querySelector('.range-error');

function getRandomNumber() {
  return Math.floor( Math.random() * 100) + 1;
}

function disableClearButton() {
  clearInputButton.disabled = true;
}

function enableClearButton(){
  clearInputButton.disabled = false;
}

disableClearButton();

function disableResetButton() {
  resetGameButton.disabled = true;
}

function enableResetButton() {
  resetGameButton.disabled = false;
}

disableResetButton();

function submitEvent(){
  var numberGuessed = parseInt(guessInput.value);
  if (randomNumber === numberGuessed) {
    message.innerText = "Yay! You guessed the right number!";
  }
  if (randomNumber < numberGuessed) {
   message.innerText = "Your guess is too high.";
  }
  if (randomNumber > numberGuessed) {
    message.innerText = "Your guess is too low.";
   }

   lastGuess.innerText = numberGuessed;

   if (numberGuessed >= 100 || numberGuessed <= 1) {
     messageRange.innerText = "Your number is not between 1 and 100.";
   }

   if (numberGuessed <= 100 && numberGuessed >=1) {
     messageRange.innerText ="";
   }
   enableClearButton();
   enableResetButton();
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

function gameReset (){
  document.location.reload(true);
}

resetGameButton.addEventListener('click', function(e) {
  gameReset();
});
