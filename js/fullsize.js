import { randomNumber } from './data.js';
import {pictureElement} from './miniature.js';

// Создаём необходимые переменные
const fullSize = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const body = document.querySelector('body');
const commentCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const commmmentsFragment = document.createDocumentFragment();

// Список комментариев под фотографией:

function socialCommentsList ( ) {
  socialComments.innerHTML = '';
  randomNumber[0].comments.forEach( (element) => {
    const li = document.createElement('li');
    li.classList.add('social__comment');
    const img = document.createElement('img');
    img.classList.add('social__picture');
    img.src = element.avatar;
    img.alt = element.name;
    img.width = 35;
    img.height = 35;
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('social__text');
    p.textContent = element.message;
    li.appendChild(p);

    commmmentsFragment.appendChild(li);
  });

  socialComments.appendChild(commmmentsFragment);
}

// Вешаем обработчик на сетку
pictureElement.addEventListener('click', (event) => {
// Удаляем класс "hidden" у элемента ".big-picture" и заполняем его данными о фотографии.
  fullSize.classList.remove('hidden');
  const eventTarget = event.target.closest('a');
  fullSize.querySelector('.big-picture__img img').src = eventTarget.querySelector('.picture__img').src;
  fullSize.querySelector('.big-picture__img img').alt = eventTarget.querySelector('.picture__img').alt;
  fullSize.querySelector('.likes-count').textContent = eventTarget.querySelector('.picture__likes').textContent;
  fullSize.querySelector('.comments-count').textContent = eventTarget.querySelector('.picture__comments').textContent;
  fullSize.querySelector('.social__caption').textContent = eventTarget.querySelector('.picture__img').alt;
  socialCommentsList();

  // Фиксируем контейнер с фотографиями
  body.classList.add('modal-open');

  // Скрываем блоки ".social__comment-count" и  ".comments-loader".
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
});

// Код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

bigPictureCancel.addEventListener('click' ,  () => {
  if(!fullSize.classList.contains('hidden')) {
    fullSize.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

document.addEventListener('keydown' ,  (evt) =>{
  if (evt.keyCode === 27 ) {
    fullSize.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

export {body};
