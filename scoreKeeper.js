const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
let finalScore = document.querySelector("#playto");

const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");
let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener("click", () => {
  p1Score++;
  p1Display.textContent = p1Score;
  if (p1Score == finalScore.value) {
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});
p2Button.addEventListener("click", () => {
  p2Score++;
  p2Display.textContent = p2Score;
  if (p2Score == finalScore.value) {
    p1Button.disabled = true;
    p2Button.disabled = true;
  }
});

reset.addEventListener("click", () => {
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Button.disabled = false;
  p2Button.disabled = false;
});
