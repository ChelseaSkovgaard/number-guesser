var message = document.querySelector('.message');

var lastGuess = document.querySelector('.last-guess');

var clearInputButton = document.querySelector('.clear-input');

var resetGameButton = document.querySelector('.reset-game');

var messageRange = document.querySelector('.range-error');

var guessInput = document.getElementById('number-guess');

var submitGuessButton = document.querySelector('.submit-guess');

var submitRangeButton = document.querySelector('.submit-range');

// this is the problem!
function getRandomNumber (min, max) {
  debugger;
  return (Math.floor(Math.random() * (max-min + 1)) + min);
}


function disableClearButton() {
  clearInputButton.disabled = true;
}

function enableClearButton(){
  clearInputButton.disabled = false;
}

function disableResetButton() {
  resetGameButton.disabled = true;
}

function enableResetButton() {
  resetGameButton.disabled = false;
}
disableClearButton();

disableResetButton();


var min = document.querySelector('.min');
var max = document.querySelector('.max');
var userMin = document.querySelector('.min-range');
var userMax = document.querySelector('.max-range');

function submitRange () {
  userMin.innerText = "Your minimum number is: " + min.value;
  userMax.innerText = "Your maximum number is: " + max.value;
  // puts min and max in dom somewhere
}

submitRangeButton.addEventListener('click', function(e) {
  submitRange();
});

function submitEvent(){

  var numberGuessed = parseInt(guessInput.value);
  var randomNumber = getRandomNumber(parseInt(min.value), parseInt(max.value));
  // var min = userinput min in dom
  // var max = userinput max in dom
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
  //  if (numberGuessed === 'NaN') {
  //    lastGuess.innerText = "Error - that is not a number!";
  //  }

   lastGuess.innerText = numberGuessed;

   if (numberGuessed >= max || numberGuessed <= min) {
     messageRange.innerText = "You're number is not between 1 and 100.";
   }

   if (numberGuessed <= max && numberGuessed >=min) {
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

//
// e.preventDefault --> Stops buttons from doing the things. e is inside the function.
