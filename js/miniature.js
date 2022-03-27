import {randomNumber} from './data.js';

const picture = document.querySelector('.picture__img');
picture.src = 'avatar';

const pictureLikes = document.querySelector('.picture__likes');
pictureLikes.textContent = 'likes';

const pictureComments = document.querySelector('.picture__comments');
pictureComments.textContent = 'comments';
