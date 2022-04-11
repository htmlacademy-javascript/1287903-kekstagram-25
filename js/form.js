import {body} from './fullsize.js';

// Подключение библиотеки
const uploadForm = document.querySelector('.img-upload__form');
const pristine = new Pristine(uploadForm);
// Переменная для пустого состояния поля загрузки "img-upload__label"
const  uploadLabel = document.querySelector('.img-upload__label');
// Переменные загрузки изображения
const uploadFile = document.getElementById('upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
// Переменная для кода для закрытия формы редактирования при клике по иконке закрытия.
const uploadCancel = document.querySelector('.img-upload__cancel');
// Переменная для отмены кнопки Esc при фокусе на комментарий
const textDescription = document.querySelector('.text__description');
// Хештеги
const textHashtags = document.querySelector('.text__hashtags');

// Загрузка изображения
uploadFile.addEventListener('change', () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
});

// Скрытие модального окна и формы редактирования изображения
const modalClose = function () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadLabel.value='';
};
// Код для закрытия формы редактирования при клике по иконке закрытия.
uploadCancel.addEventListener('click' ,  () => {
  if(!uploadOverlay.classList.contains('hidden')) {
    modalClose();
  }
});

// Код для закрытия формы редактирования по нажатию клавиши Esc
const onKeyDown = function (evt) {
  if (evt.keyCode === 27 ) {
    modalClose();
  }
};
document.addEventListener('keydown' , onKeyDown);

// Код для отмены кнопки Esc при фокусе на комментарий
textDescription.addEventListener('focus', () =>{
  document.removeEventListener('keydown' , onKeyDown);
});

textDescription.addEventListener('blur', () =>{
  document.addEventListener('keydown' , onKeyDown);
});

// Проверка отправки не валидных строк
uploadForm.addEventListener('submit', (event)=> {
  const valid = pristine.validate();
  if (!valid) {
    event.preventDefault();
  }
} );
// Функция проверки на #,символы,длину хештега
function checkHashtag (currentValue) {
  const regular = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  return regular.test(currentValue);
}

function checkCorrectHashtags (value) {
  const hashtags = value.split(' ');
  const everyHashtags = hashtags.every(checkHashtag);
  return everyHashtags===true;
}

pristine.addValidator(textHashtags,checkCorrectHashtags,'Неверный хештег:Хеш-тег начинается с #;Хеш-теги разделяются пробелом');

// Функция проверки количества хештегов
function checkAmountHashtags (value) {
  const hashtagsAmount = value.split(' ');
  return hashtagsAmount.length <=5;
}
pristine.addValidator(textHashtags,checkAmountHashtags,'Не больше 5');

// Функция проверки одного и того же хеш-тега
function checkSimilarHashtags (value) {
  const hashtagsSimilar = value.split(' ');
  const hashtagsSimilarRegister = hashtagsSimilar.map((element) => element.toLowerCase());
  const checkElementHashtags = [...new Set(hashtagsSimilarRegister)];
  return checkElementHashtags.length === hashtagsSimilar.length;
}
pristine.addValidator(textHashtags,checkSimilarHashtags,'Одинаковый хеш-тег');

// Код для отмены кнопки Esc при фокусе на хештег
textHashtags.addEventListener('focus', () =>{
  document.removeEventListener('keydown' , onKeyDown);
});

textHashtags.addEventListener('blur', () =>{
  document.addEventListener('keydown' , onKeyDown);
});
