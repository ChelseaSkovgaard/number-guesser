var message = document.querySelector('.message');
//
// var mostRecentGuess = document.querySelector('.most-recent');
//
// var clearInput = document.querySelector('.clear-input');
//
// var resetGame = document.querySelector('.reset-game');

// var getRandomNumber = Math.floor( Math.random() * 100) + 1;
var getRandomNumber = 10;

var guessInput = document.getElementById('number-guess');



var submitGuessButton = document.querySelector('.submit-guess');

function submitEvent(){
  var numberGuessed = parseInt(guessInput.value);
  console.log(getRandomNumber);
  console.log(numberGuessed);
  if (getRandomNumber === numberGuessed) {
    message.innerText = "Yay! You are Right";
  } else {
    message.innerText = "Nope";
  }

  // if (getRandomNumber < guessInputValue) {
  //   message.innerText = "You're guess is too high";
  // }
  //
  // if (getRandomNumber > guessInputValue) {
  //   message.innerText = "You're guess is too low";
  // }
}

submitGuessButton.addEventListener('click', function(e) {
  debugger;
  submitEvent();
});

//
// e.preventDefault --> Stops buttons from doing the things. e is inside the function.
