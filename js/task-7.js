const inputFontsize = document.querySelector('#font-size-control');
const textToChangeFont = document.querySelector('#text');


inputFontsize.addEventListener('input', handleInputFontsize);
textToChangeFont.style.fontSize = '14px';

function handleInputFontsize (ev) {
    textToChangeFont.style.fontSize = `${ev.target.value}px`;
}



// Задание 7
// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и изменяет инлайн-стиль 
// span#text обновляя свойство font-size. В результате при перетаскивании 
// ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>


// по 7 додаєш listener на інпут на подію 'input'
// і на кожну цю подію сюди document.querySelector('#text').style.fontSize виставляєш нове значення. Тільки треба це все нормально оформити)





