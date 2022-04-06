import {body} from './fullsize.js';

// Подключение библиотеки
const uploadForm = document.querySelector('.img-upload__form');
new Pristine(uploadForm);

// Загрузка изображения
const uploadFile = document.getElementById('upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');

uploadFile.addEventListener('change', () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
});

// Код для закрытия формы редактирования при клике по иконке закрытия.
const uploadCancel = document.querySelector('.img-upload__cancel');
uploadCancel.addEventListener('click' ,  () => {
  if(!uploadOverlay.classList.contains('hidden')) {
    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

// Код для закрытия формы редактирования по нажатию клавиши Esc
const deleteKeyDown = function (evt) {
  if (evt.keyCode === 27 ) {
    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};
document.addEventListener('keydown' , deleteKeyDown);

// Код для отмены кнопки Esc при фокусе на комментарий
const textDescription = document.querySelector('.text__description');

textDescription.addEventListener('focus', () =>{
  document.removeEventListener('keydown' , deleteKeyDown);
})

textDescription.addEventListener('blur', () =>{
  document.addEventListener('keydown' , deleteKeyDown);
})
// Хештеги



// Код для отмены кнопки Esc при фокусе на хештег
const textHashtags = document.querySelector('.text__hashtags');

textHashtags.addEventListener('focus', () =>{
  document.removeEventListener('keydown' , deleteKeyDown);
})

textHashtags.addEventListener('blur', () =>{
  document.addEventListener('keydown' , deleteKeyDown);
})


