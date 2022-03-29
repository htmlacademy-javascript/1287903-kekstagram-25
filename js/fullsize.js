import {randomNumber} from './data.js';

// Удаляем класс "hidden" у элемента ".big-picture"
const fullSize = document.querySelector('.big-picture');
fullSize.classList.remove('hidden');

const preview = document.querySelector('.big-picture__preview');

const bigPictureFragment = document.createDocumentFragment();

randomNumber.forEach(({url,likes,comments,description}) => {
  const bigPicture = preview .cloneNode(true);

  bigPicture.querySelector('.big-picture__img').src = url;

  bigPicture.querySelector('.likes-count').textContent = likes;

  bigPicture.querySelector('.comments-count').textContent = comments.length;

  // Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments

  bigPicture.querySelector('.social__caption').textContent = description;

  bigPictureFragment.appendChild(bigPicture);
});

fullSize.appendChild(bigPictureFragment);

// Скрываем блоки ".social__comment-count" и  ".comments-loader".

const commentCount = document.querySelector('.social__comment-count');
commentCount.classList.add('hidden');

const commentLoader = document.querySelector('.comments-loader');
commentLoader.classList.add('hidden');

// Фиксируем контейнер с фотографиями

const modalOpen = document.querySelector('body');
modalOpen.classList.add('modal-open');

const modalClose = document.querySelector('body');
modalCLose.classList.remove('modal-open');

// Код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.
const bigPicture = document.querySelector('.big-picture__cancel');
bigPicture.addEventListener('click' , function () {
  if (fullSize.classList.contains('hidden')) {
    fullSize.classList.remove('hidden')
  }
});

bigPicture.addEventListener('keydown' , function (evt) {
  if (evt.keyCode === 27 ) {
    fullSize.classList.remove('hidden')
  }
});
