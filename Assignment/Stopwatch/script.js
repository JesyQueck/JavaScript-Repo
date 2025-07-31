const hourEl = document.querySelector('.hours');
const minuteEl = document.querySelector('.minutes');
const secondEl = document.querySelector('.seconds');
const stopButton = document.querySelector('.button_stop');
const startButton = document.querySelector('.button_start');
const resetButton = document.querySelector('.button_reset')

let hour = 0;
let minute = 0;
let second = 0;
let stopwatch;
let isActive = false;

startButton.addEventListener('click', function () {
     if (isActive) return;
     isActive = true;
     stopwatch = setInterval(() => {
          second++;
          hourEl.textContent = String(hour).padStart(2, "0");
          minuteEl.textContent = String(minute).padStart(2, "0");
          secondEl.textContent = String(second).padStart(2, "0");
          if (second === 60) {
               minute++;
               second = 0;
          }
          if (minute === 60) {
               hour++;
               minute = 0;
          }
     }, 1000);
});
stopButton.addEventListener('click', function () {
     clearInterval(stopwatch);
     isActive = false
})
resetButton.addEventListener('click', function () {
     clearInterval(stopwatch);
     hour = 0;
     minute = 0;
     second = 0;
     isActive = false;
     hourEl.textContent = "00";
     minuteEl.textContent = "00";
     secondEl.textContent = "00";
});
