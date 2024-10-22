'use strict';

function timeLeft() {

  const now = new Date();
  const currentYear = now.getFullYear();
  const newYear = new Date(`${currentYear + 1}-01-01 00:00:00`);

  const totalMs = newYear - now;

  const seconds = Math.floor((totalMs / 1000) % 60);
  const minutes = Math.floor((totalMs / (1000 * 60)) % 60);
  const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
  const days = Math.floor((totalMs / (1000 * 60 * 60 * 24)) % 30);
  const months = Math.floor((totalMs / (1000 * 60 * 60 * 24 * 30)));

  return { months, days, hours, minutes, seconds };
}

function updateTimer() {
  const timer = document.getElementById('timer');
  const { months, days, hours, minutes, seconds } = timeLeft();

  timer.textContent = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`
}

setInterval(updateTimer, 1000);


