'use strict';

const wrapper = document.querySelector('.wrapper');
let counter = 0;

for (let i = 0; i < 5; i++) {
  const button = document.createElement('button');
  button.innerHTML = 'Нажми меня';
  wrapper.append(button)
}

wrapper.addEventListener('click', (event) => {
  const button = event.target;

  if (button.tagName === 'BUTTON') {
    const buttons = document.querySelectorAll('button');
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
  }
});




