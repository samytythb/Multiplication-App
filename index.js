const questionEl = document.getElementById("question");
let correctAns = generateQuestion();
let score = JSON.parse(localStorage.getItem("score"));
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  questionEl.textContent = `What is ${num1} multiply by ${num2}?`;
  return num1 * num2;
}
if (!score) {
  score = 0;
}
scoreEl.textContent = "score: " + score;

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const userAns = +inputEl.value;
  if (correctAns === userAns) {
    score++;
    uopdateLocalStorage();
  } else {
    score--;
    uopdateLocalStorage();
  }
  correctAns = generateQuestion();
  scoreEl.textContent = "score: " + score;
  inputEl.value = "";
});
function uopdateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
function validateInput(event) {
  const keyCode = event.keyCode;
  if (!(keyCode >= 48 && keyCode <= 57) && keyCode !== 8 && keyCode !== 46) {
    event.preventDefault();
  }
}
