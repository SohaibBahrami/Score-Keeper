// score variables:
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
let finalScore = document.querySelector("#playto");
let p1Score = 0;
let p2Score = 0;
// button variables:
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");

p1Button.addEventListener("click", () => {
  // add 1 to score every time button is pressed
  p1Score++;
  p1Display.textContent = p1Score;
  if (p1Score == finalScore.value) {
    // disable buttons if condition is met
    p1Button.disabled = true;
    p2Button.disabled = true;
    // green is winner, red is loser
    p1Display.style.color = "green";
    p2Display.style.color = "red";
  }
});
p2Button.addEventListener("click", () => {
  p2Score++;
  p2Display.textContent = p2Score;
  if (p2Score == finalScore.value) {
    // disable buttons if condition is met
    p1Button.disabled = true;
    p2Button.disabled = true;
    // green is winner, red is loser
    p1Display.style.color = "red";
    p2Display.style.color = "green";
  }
});

reset.addEventListener("click", () => {
  // reset counter and colors and enable buttons
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Score = 0;
  p2Score = 0;
  p1Button.disabled = false;
  p2Button.disabled = false;
  p1Display.style.color = "#333333";
  p2Display.style.color = "#333333";
});
