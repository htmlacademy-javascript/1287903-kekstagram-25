// import {randomNumber} from './data.js';
import {pictureElement} from './miniature.js';

// Удаляем класс "hidden" у элемента ".big-picture"
const fullSize = document.querySelector('.big-picture');

// Вешаем обработчик на сетку
pictureElement.addEventListener('click', function(event) {
  fullSize.classList.remove('hidden')
  console.log(event.target)
} )



