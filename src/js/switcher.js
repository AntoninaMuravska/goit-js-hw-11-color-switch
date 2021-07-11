import colors from './colors.js';
import refs from './refs.js';

let intervalId;
let isActive = false;

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', startChangeBodyColor);
refs.stopBtn.addEventListener('click', stopChangeBodyColor);

function startChangeBodyColor() {
  if (isActive) {
    return;
  }

  isActive = true;
  refs.startBtn.disabled = true;
  intervalId = setInterval(changeColor, 1000);
}

function stopChangeBodyColor() {
  isActive = false;
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
}

function changeColor() {
  let randomIndexOfElement = randomIntegerFromInterval(0, colors.length - 1);
  let colorOfBody = colors[randomIndexOfElement];
  refs.body.style.backgroundColor = colorOfBody;
}
