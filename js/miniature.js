import {randomNumber} from './data.js';

const pictureElement = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureFragment = document.createDocumentFragment();

randomNumber.forEach(({url,likes,comments}) => {
  const userElement = pictureTemplate.cloneNode(true);

  userElement.querySelector('.picture__img').src = url;

  userElement.querySelector('.picture__likes').textContent = likes;

  userElement.querySelector('.picture__comments').textContent = comments.length;

  pictureFragment.appendChild(userElement);

});

pictureElement.appendChild(pictureFragment);

export{pictureElement};
