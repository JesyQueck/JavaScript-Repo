const countDown = document.getElementById('countdown');
const alertBox = document.getElementById('alert');
let count = 10;
const setCounter = () => {
     countDown.textContent = count;
     if (count === 0) {
          alertBox.style.display = 'flex';
          clearInterval(timer)
     } else {
          alertBox.style.display = 'none';
     }
     count--;
}
setCounter();
const timer = setInterval(setCounter, 1000);
