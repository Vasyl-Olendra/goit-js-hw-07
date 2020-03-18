const inputNameRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', inputProcedure);

function inputProcedure (ev) {
    const inputFulfilness = ev.target.value.length
    inputFulfilness === 0 ? (nameOutputRef.textContent = 'Незнакомец')
    : (nameOutputRef.textContent = ev.target.value);
}




// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>