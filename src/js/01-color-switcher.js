// 01-color-switcher.js

// Add imports above this line
// Change code below this line

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId = null;

// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Function to start changing the background color
function startColorSwitching() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
}

// Function to stop changing the background color
function stopColorSwitching() {
  clearInterval(intervalId);
  startButton.disabled = false;
}

// Event listeners for buttons
startButton.addEventListener('click', startColorSwitching);
stopButton.addEventListener('click', stopColorSwitching);
