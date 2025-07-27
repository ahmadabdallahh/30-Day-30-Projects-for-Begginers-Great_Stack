// TODO: Simple Stop Watch App

const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');
const display = document.getElementById('display');

let timer = null;
let elapsed = 0;
let running = false;

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;
  return (
    String(hours).padStart(2, '0') +
    ':' +
    String(minutes).padStart(2, '0') +
    ':' +
    String(seconds).padStart(2, '0')
  );
}

function updateDisplay() {
  display.textContent = formatTime(elapsed);
}

function start() {
  if (running) return;
  running = true;
  startStopBtn.classList.add('active');
  startStopBtn.querySelector('span').textContent = 'Stop';
  let last = Date.now();
  timer = setInterval(() => {
    let now = Date.now();
    elapsed += now - last;
    last = now;
    updateDisplay();
  }, 100);
}

function stop() {
  if (!running) return;
  running = false;
  startStopBtn.classList.remove('active');
  startStopBtn.querySelector('span').textContent = 'Start';
  clearInterval(timer);
}

function reset() {
  stop();
  elapsed = 0;
  updateDisplay();
}

startStopBtn.addEventListener('click', () => {
  if (running) {
    stop();
  } else {
    start();
  }
});

resetBtn.addEventListener('click', reset);

// Initialize display
updateDisplay();
