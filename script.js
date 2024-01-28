let userScore = 0;
let computerScore = 0;
let drawScore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const drawScorePara=document.querySelector("#draw-score")

const generateComputerChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

const drawGame = () => {
  drawScore++;
  msg.innerText = "Game was Draw. Play again."; 
  msg.style.backgroundColor = "skyblue";
  drawScorePara.innerText=drawScore;

};

const playGame = (userChoice) => {
  const computerChoice = generateComputerChoice();
  if (userChoice === computerChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      userWin = computerChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = computerChoice === "Scissors" ? false : true;
    } else {
      userWin = computerChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `You lost. ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});