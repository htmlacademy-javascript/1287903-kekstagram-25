import {body} from './fullsize.js';

// Подключение библиотеки
const uploadForm = document.querySelector('.img-upload__form');
new Pristine(uploadForm);

// Загрузка изображения
const uploadFile = document.getElementById('upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
uploadFile.addEventListener('change', () => {
// Форма редактирования изображения
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
});

// Код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.
const uploadCancel = document.querySelector('.img-upload__cancel');
uploadCancel.addEventListener('click' ,  () => {
  if(!uploadOverlay.classList.contains('hidden')) {
    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

const deleteKeyDown = document.addEventListener('keydown' ,  (evt) =>{
  if (evt.keyCode === 27 ) {
    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

// Код для валидации формы добавления изображения
const textDescription = document.querySelector('.text__description');
textDescription.addEventListener('focus', () => {
  document.removeEventListener(deleteKeyDown());
});

// textDescription.addEventListener('blur', (evt) => {

// };
