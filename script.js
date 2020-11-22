//seect elements
 var buttons = document.querySelectorAll('.button');
 var playerSelection = document.querySelector('.player-selection');
 var computerSelection = document.querySelector('.computer-selection');
 var otherScore = document.querySelector('.computerScore');
 var userScore = document.querySelector('.playerScore'); 
 var gameMessage = document.querySelector("#announcement")
 var choices = document.querySelector("#choices")
 var choice = ["rock, paper, scissors"]
 playerScore= 0;
 computerScore= 0;
 var yourScore = document.querySelector("#playerScore")
 var theirScore = document.querySelector("#computerScore")
 var resetBtn = document.querySelector('#reset');
 var roundResults = document.querySelector('#roundResults');
 var body = document.getElementById('body');
//add event listeners for the buttons
 var rock = document.querySelector("#rock");
 rock.addEventListener('click', function(){
    compare("rock");
 })
 var scissors = document.querySelector("#scissors");
 scissors.addEventListener('click', function(){
   compare("scissors");
 })
 var paper = document.querySelector("#paper");
 paper.addEventListener('click', function(){
    compare("paper");
 })

 startGame();
//main function to play the game
var compare = function(userChoice) { 
  computerChoice = Math.floor(Math.random()*3 + 1);

  if (computerChoice === 1) {
      computerChoice = "rock";
    } else if(computerChoice === 2) {   
      computerChoice = "paper";
    } else {    computerChoice = "scissors";}
 
   if( userChoice === computerChoice) { 
     choices.textContent = "It’s a tie! You both chose " + userChoice;
     playerSelection.textContent= userChoice;
     computerSelection.textContent = computerChoice;
}
if( userChoice === "rock" && computerChoice === "scissors" ) {
   choices.textContent = "You Win! You chose " + userChoice + " Computer chose " + computerChoice , userScore++,
   yourScore.textContent = "Your score is : " + userScore,
   theirScore.textContent = "Computer score is : " + computerScore;
   playerSelection.textContent= "rock";
   computerSelection.textContent = "scissors";

 } else if(userChoice === "rock" && computerChoice === "paper") { 
   choices.textContent = "You Win! You chose " + userChoice + " Computer chose " + computerChoice , userScore++,
   yourScore.textContent = "Your score is : " + userScore,
   theirScore.textContent = "Computer score is : " + computerScore;
   playerSelection.textContent= "rock";
   computerSelection.textContent = "paper";
 }else if(userChoice === "paper" && computerChoice === "rock" ) {  
  choices.textContent = "You Win! You chose " + userChoice + " Computer chose " + computerChoice , userScore++,
  yourScore.textContent = "Your score is : " + userScore,
  theirScore.textContent = "Computer score is : " + computerScore;
  playerSelection.textContent= "paper";
  computerSelection.textContent = "rock";

} else if(userChoice === "paper" && computerChoice === "scissors"){ 
  choices.textContent = "You Lose! You chose " + userChoice + " Computer chose " + computerChoice , computerScore++,
  yourScore.textContent = "Your score is : " + userScore,
  theirScore.textContent = "Computer score is : " + computerScore;
  playerSelection.textContent= "paper";
  computerSelection.textContent = "scissors";

 } else if(userChoice === "scissors" && computerChoice === "rock") {  
  choices.textContent = "You Lose! You chose " + userChoice + " Computer chose " + computerChoice , computerScore++,
  yourScore.textContent = "Your score is : " + userScore,
  theirScore.textContent = "Computer score is : " + computerScore;
  playerSelection.textContent= "scissors";
  computerSelection.textContent = "rock";

} else if (userChoice === "scissors" && computerChoice === "paper") {   
  choices.textContent = "You Win! You chose " + userChoice + " Computer chose " + computerChoice , userScore++,
  yourScore.textContent = "Your score is : " + userScore,
  theirScore.textContent = "Computer score is : " + computerScore;  
  playerSelection.textContent= "scissors";
  computerSelection.textContent = "paper";

}  
 checkWinner();
};

resetGame()
//logic to check the winner and stop playing after 5 marks
function checkWinner() {
  if (computerScore >= 5 ) {
    roundResults.textContent = "you loose!!!";
    roundResults.style.color ='blue';
    disableButtons() 
  
  }else if (userScore >= 5) {
     roundResults.textContent = "You won the game!";
     roundResults.style.color ='red';
     disableButtons() 
     document.body.style.backgroundImage = "url('img/gold.jpg')"
  }
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}
//functions to play again
function resetGame() {
  resetBtn.addEventListener('click',() => 
    location.reload());
}
  

function startGame() {
 
    rock.addEventListener('click', getPlayerChoice);
    paper.addEventListener('click', getPlayerChoice);
    scissors.addEventListener('click', getPlayerChoice);
  }



function getPlayerChoice(e) {
  userChoice = (e.target.id)
  compare(userChoice);
}