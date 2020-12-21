import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  bodyRef: document.querySelector('body'),
};

let intervalId;
let isActive = false;

refs.startBtn.addEventListener('click', startChangeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startChangeColor() {
  if (isActive) {
    return;
  }

  intervalId = setInterval(onChangingColor, 1000);
  isActive = true;
  refs.startBtn.disabled = true;
}

function stopChangeColor() {
  clearInterval(intervalId);
  isActive = false;
  refs.startBtn.disabled = false;
}

function onChangingColor() {
  let randomIndexOfElement = randomIntegerFromInterval(0, colors.length - 1);
  let colorOfBody = colors[randomIndexOfElement];
  refs.bodyRef.style.backgroundColor = colorOfBody;
}
