let p1Start = document.querySelector("#p1Display");
let p2Start = document.querySelector("#p2Display");
// let finalScore = [document.querySelectorAll("option")];
// console.log(finalScore.value);

const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");

p1Button.addEventListener("click", () => {
  p1Start.innerHTML = scoreKeeper(p1Start.innerHTML);
});
p2Button.addEventListener("click", () => {
  p2Start.innerHTML = scoreKeeper(p2Start.innerHTML);
});

const scoreKeeper = function (playerScore) {
  return parseInt(playerScore) + 1;
};
