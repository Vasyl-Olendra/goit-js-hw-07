const counterRef = document.querySelector('#counter');
const valueRef = document.querySelector('#value');

counterRef.addEventListener('click', valueChange);

let counterValue = 0;

function valueChange(ev) {
  if (ev.target.dataset.action === 'increment') {
    counterValue += 1;
  }

  if (ev.target.dataset.action === 'decrement') {
    counterValue -= 1;
  }
  valueRef.textContent = counterValue;
}

// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
