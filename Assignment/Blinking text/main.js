const blinkTxt = document.getElementById('txt')
const controlButton = document.getElementById('control');
let isblinking = false

let blinkingInterval = setInterval(() => {
     blinkTxt.style.visibility = blinkTxt.style.visibility === 'hidden' ? 'visible' : 'hidden';
     isblinking = true
     controlButton.textContent = "Stop"
}, 500);

const stopblinking = () => {
     blinkTxt.style.visibility = blinkTxt.style.visibility = 'visible';
     clearInterval(blinkingInterval);
     isblinking = false;
     controlButton.textContent = "Start"

}
controlButton.addEventListener('click', () => {
     if (isblinking) {
          stopblinking()
     } else {
          blinkingInterval = setInterval(() => {
               blinkTxt.style.visibility = blinkTxt.style.visibility === 'hidden' ? 'visible' : 'hidden';
               isblinking = true
               controlButton.textContent = "Stop"
          }, 500);
     }
}); 