const inputValidRef = document.querySelector('#validation-input');

inputValidRef.addEventListener('blur', handleInputBlur);
inputValidRef.addEventListener('focus', handleInputFocus);

function handleInputBlur(ev) {
  const inputFulfilness = ev.target.value.length;
  const amount = +ev.target.getAttribute('data-length');
  debugger;
  amount === inputFulfilness
    ? inputValidRef.classList.add('valid')
    : inputValidRef.classList.add('invalid');
}
function handleInputFocus() {
  inputValidRef.classList.remove('invalid', 'valid');
}

// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
