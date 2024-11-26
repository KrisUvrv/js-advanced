'use strict';

const wrapper = document.querySelector('.wrapper');

for (let i = 0; i < 5; i++) {
  const button = document.createElement('button');
  button.innerHTML = 'Нажми меня';
  wrapper.append(button)
}

const buttons = document.querySelectorAll('button');
let counter = 0;
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    buttons.forEach((button) => {
      button.innerHTML = 'Нажми меня';
      button.classList.remove('clicked');
    });
    button.innerHTML = 'Нажата!';
    button.classList.add('clicked');

    let el = document.getElementById('counter');
    if (!el) {
      el = document.createElement('div');
      el.setAttribute('id', 'counter');
      document.body.append(el);
    }
    el.innerHTML = `Всего нажатий: ${++counter}`;
  })
})



