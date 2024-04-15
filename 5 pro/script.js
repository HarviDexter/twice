const items = document.querySelectorAll(".coutdown-item > h4");
const Otlovitel = document.querySelector(".coutdown");

// Дата отсчета
let coutdownDate = new Date(2025, 3, 14, 15, 10, 59).getTime();

function getCountTime() {
  // Получаем тек время
  const now = new Date().getTime();

  // найти разницу времени
  const distance = coutdownDate - now;

  // 1c = 1000ms
  // 1 min = 60sec
  // 1hour = 60min
  // 1 day = 24hour

  // Создаем переменные в мили сек
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  // Подсчет для дней часов минут и сек

  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / oneHour);
  let mins = Math.floor((distance % oneHour) / oneMin);
  let secs = Math.floor((distance % oneMin) / 1000);

  // создаем массив с переменными
  const values = [days, hours, mins, secs];
  console.log(values);

  // добавляем знач
  items.forEach(function (item, index) {
    item.textContent = values[index];
  });
  if (distance < 0) {
    clearInterval(coutdown);
    Otlovitel.innerHTML = "<h4 class='mal'> Время сау болкетты</h4>";
  }
}

// обнова счетчика каждую сек
let coutdown = setInterval(getCountTime, 1000);

// инициализация тек времени
getCountTime();
