//Variables
let wins=0;
let loss=0;
let guesses=10;
let guessesLeft=10;
let guessedLetters=[];
let letterToGuess=null;
let userGuessed=null;

//document.ready that allows the HTML to load before javascript
window.onload= function(){
    reset();
    document.onkeyup = function(event){
        userGuess(event);
        if(userGuess)
        playingGame();
    }
}

//JavaScript to create select a random letter from the alphabet
function computersChoice(){
    computersOption= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
    let computersChoice = computersOption[Math.floor(Math.random*computersOption.length)];
}

//JavaScript for player guess based on the player clicking on a key
function userGuess(event){
    userGuessed= event.key;
    userGuessed= userGuessed.toUpperCase();
}

//Javascript to indicate how many guesses player has left
function guessesRemaining(){
    document.querySelector('.guessesLeft').innerHTML="Guesses left: " + guessesLeft;
}

//Creates a list of all the guesses made so far
function currentGuess(){
    guessedLetters.push(userGuessed);
    document.querySelector('.currentGuesses').innerHTML = 'Your Guesses so far: ' + guessedLetters.join(', ');
}


//Function under rest conditions
function reset(){
    guesses=10;
    guessesLeft=10;
    guessedLetters=[];
    computersChoice();
    currentGuess();
}

//Runs the actual game
function playingGame(){
    guessesLeft--;
    guessesRemaining();
    currentGuess();

    //win conditions
    if(guessesLeft>0){
        if(userGuessed===computersChoice){
            wins++;
            document.querySelector('.wins').innerHTML = "Wins: " + wins;
            alert('You guesses right!  Congratulations! Let us play again!')
            reset();
        }
    }
    else if(guessesLeft===0){
        loss++;
        document.querySelector('.losses').innerHTML = 'Losses: ' + loss;
        alert('Bummer!  Guess you are not clarevoyant!  Want to try again!?');
        reset();
    }
}

