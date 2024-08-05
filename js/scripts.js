const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const rock = document.querySelector("#rock");
const reset = document.querySelector("#reset");
const moves = document.querySelector("#moves");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
let computerMove = "";
let randomNumber = "";
let wins = Number(0);
let loses = Number(0);
let tie = Number(0);

function compMove() {
  randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    computerMove = "rock";
  } else if (randomNumber === 2) {
    computerMove = "paper";
  } else if (randomNumber === 3) {
    computerMove = "scissors";
  }
}

paper.onclick = () => {
  compMove();
  moves.innerHTML = `siz <img src="./img/2.png" alt="" />
    <img src="./img/${randomNumber}.png" alt="" /> computer`;
  if (computerMove === "rock") {
    result.innerHTML = `siz Yutdingiz🎉`;
    wins++;
  } else if (computerMove === "paper") {
    result.innerHTML = `Bir xil🤷‍♂️`;
    tie++;
  } else if (computerMove === "scissors") {
    result.innerHTML = `siz yutqazdingiz🙇‍♂️`;
    loses++;
  }
  overAllResult();
};
rock.onclick = () => {
  compMove();
  moves.innerHTML = `siz <img src="./img/1.png" alt="" />
    <img src="./img/${randomNumber}.png" alt="" /> computer`;
  if (computerMove === "rock") {
    result.innerHTML = `Bir xil🤷‍♂️`;
    tie++;
  } else if (computerMove === "paper") {
    result.innerHTML = `siz yutqazdingiz🙇‍♂️`;
    loses++;
  } else if (computerMove === "scissors") {
    result.innerHTML = `siz Yutdingiz🎉`;
    wins++;
  }
  overAllResult();
};
scissors.onclick = () => {
  compMove();
  moves.innerHTML = `siz <img src="./img/3.png" alt="" />
    <img src="./img/${randomNumber}.png" alt="" /> computer`;
  if (computerMove === "rock") {
    result.innerHTML = `siz yutqazdingiz🙇‍♂️`;
    loses++;
  } else if (computerMove === "paper") {
    result.innerHTML = `siz Yutdingiz🎉`;
    wins++;
  } else if (computerMove === "scissors") {
    result.innerHTML = `Bir xil🤷‍♂️`;
    tie++;
  }
  overAllResult();
};
function overAllResult() {
  score.innerHTML = `Yutishlar:${wins} Yutqazishlar:${loses}: Bir xil:${tie}`;
}
reset.onclick = () => {
  wins = 0;
  loses = 0;
  tie = 0;
  score.innerHTML = `Yutishlar:${wins} Yutqazishlar:${loses}: Bir xil:${tie}`;
};
