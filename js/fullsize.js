import { randomNumber } from './data.js';
import {pictureElement} from './miniature.js';

// Удаляем класс "hidden" у элемента ".big-picture"
const fullSize = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments')

// Список комментариев под фотографией:
const commmmentsFragment = document.createDocumentFragment();

function socialCommentsList ( ) {
  socialComments.innerHTML = '';
  randomNumber[0].comments.forEach( element => {
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

    commmmentsFragment.appendChild(li)
  });

socialComments.appendChild(commmmentsFragment)
}

// Вешаем обработчик на сетку
pictureElement.addEventListener('click', function(event) {
  fullSize.classList.remove('hidden');
  console.log(event.target.closest('a'));
  const eventTarget = event.target.closest('a');
  fullSize.querySelector('.big-picture__img img').src = eventTarget.querySelector('.picture__img').src
  fullSize.querySelector('.big-picture__img img').alt = eventTarget.querySelector('.picture__img').alt
  fullSize.querySelector('.likes-count').textContent = eventTarget.querySelector('.picture__likes').textContent;
  fullSize.querySelector('.comments-count').textContent = eventTarget.querySelector('.picture__comments').textContent;
  fullSize.querySelector('.social__caption').textContent = eventTarget.querySelector('.picture__img').alt;
  socialCommentsList()

// Фиксируем контейнер с фотографиями
  const body = document.querySelector('body');
  body.classList.add('modal-open');

} )

// Скрываем блоки ".social__comment-count" и  ".comments-loader".
const commentCount = document.querySelector('.social__comment-count');
commentCount.classList.add('hidden');

const commentLoader = document.querySelector('.comments-loader');
commentLoader.classList.add('hidden');

// Код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.
const bigPictureCancel = document.querySelector('.big-picture__cancel');
bigPictureCancel.addEventListener('click' , function () {
  if (!fullSize.classList.contains('hidden')) {
    fullSize.classList.add('hidden');
    body.classList.remove('modal-open')
  }
});

document.addEventListener('keydown' , function (evt) {
  if (evt.keyCode === 27 ) {
    fullSize.classList.add('hidden')
    body.classList.remove('modal-open')
  }
});


