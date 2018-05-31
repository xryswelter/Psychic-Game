//Variables
let wins=0;
let loss=0;
let guesses=10;
let guessesLeft=10;
let guessedLetters=[];
let letterToGuess=null;

//JavaScript to create select a random letter from the alphabet
function computersChoice(){
    computersOption= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
    let computersChoice = computersOption[Math.floor(Math.random*computersOption.length)];
}

//JavaScript for player guess based on the player clicking on a key
function userGuess(e){
    let userGuess= e.key;
}

//Creates a list of all the guesses made so far
function remainingGuesses(){
    document.querySelector('.currentGuess').innerHTML = 'Your Guesses so far: ' + guessedLetters.append('<p>'userGuess'</p>');
}

//Function under rest conditions
function reset(){
    guesses=10;
    guessesLeft=10;
    guessedLetters=[];
    computersChoice();
    guessedLetters();
}

//Runs the actual game
function playingGame(computersChoice){
