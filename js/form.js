import {body} from './fullsize.js';

// Подключение библиотеки
const uploadForm = document.querySelector('.img-upload__form');
const pristine = new Pristine(uploadForm);
// Переменная для пустого состояния поля загрузки "img-upload__label"
const  uploadLabel = document.querySelector('.img-upload__label');

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
    uploadLabel.value='';
  }
});

// Код для закрытия формы редактирования по нажатию клавиши Esc
const deleteKeyDown = function (evt) {
  if (evt.keyCode === 27 ) {
    uploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadLabel.value='';

  }
};
document.addEventListener('keydown' , deleteKeyDown);

// Код для отмены кнопки Esc при фокусе на комментарий
const textDescription = document.querySelector('.text__description');

textDescription.addEventListener('focus', () =>{
  document.removeEventListener('keydown' , deleteKeyDown);
});

textDescription.addEventListener('blur', () =>{
  document.addEventListener('keydown' , deleteKeyDown);
});

// Хештеги
const textHashtags = document.querySelector('.text__hashtags');

uploadForm.addEventListener('submit', (event)=> {
  const valid = pristine.validate();
  if (!valid) {
    event.preventDefault();
  }
} );

function checkHashtag (currentValue) {
  const regular = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  return regular.test(currentValue);
}

function checkCorrectHashtags (value) {
  const hashtags = value.split(' ');
  const everyHashtags = hashtags.every(checkHashtag);
  return everyHashtags===true;
}

pristine.addValidator(textHashtags,checkCorrectHashtags,'Неверный хештег');

// Код для отмены кнопки Esc при фокусе на хештег

textHashtags.addEventListener('focus', () =>{
  document.removeEventListener('keydown' , deleteKeyDown);
});

textHashtags.addEventListener('blur', () =>{
  document.addEventListener('keydown' , deleteKeyDown);
});


