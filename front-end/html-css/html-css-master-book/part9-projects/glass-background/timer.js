window.onload = () => {
  printTime();
  setInterval(printTime, 1000);
}

function printTime() {
  const mainLayout = document.getElementById('timer-main-layout');

  const timer = new Date();
  const day = timer.getDate();
  const hour = timer.getHours();
  const minute = timer.getMinutes();
  const second = timer.getSeconds();

  mainLayout.querySelector('.date').innerText = getTwoDigitString(day);
  mainLayout.querySelector('.hour').innerText = getTwoDigitString(hour);
  mainLayout.querySelector('.minute').innerText = getTwoDigitString(minute);
  mainLayout.querySelector('.second').innerText = getTwoDigitString(second);
}

function getTwoDigitString(number) {
  return number < 10 ? `0${number}` : String(number);
}