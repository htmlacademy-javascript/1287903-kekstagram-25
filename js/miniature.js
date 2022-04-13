import {randomNumber} from './data.js';

const pictureElement = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureFragment = document.createDocumentFragment();

randomNumber.forEach(({url,likes,comments,description,id}) => {
  const userElement = pictureTemplate.cloneNode(true);

  userElement.querySelector('.picture__img').src = url;

  userElement.querySelector('.picture__img').alt = description;

  userElement.querySelector('.picture__likes').textContent = likes;

  userElement.querySelector('.picture__comments').textContent = comments.length;

  userElement.dataset.id = id;

  pictureFragment.appendChild(userElement);


});

pictureElement.appendChild(pictureFragment);

export{pictureElement};
