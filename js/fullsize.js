import {randomNumber} from './data.js';
import {pictureElement} from './data.js';

// Удаляем класс "hidden" у элемента ".big-picture"
const fullSize = document.querySelector('.big-picture');

// Вешаем обработчик на сетку
pictureElement.addEventListener('click', function() {
  if (fullSize.classList.remove('hidden')) {

  }
} )



