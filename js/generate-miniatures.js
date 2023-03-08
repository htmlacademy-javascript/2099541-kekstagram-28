import {createSimilarObjects} from './generate-objects.js';

const similarNewMiniatures = document.querySelector('.pictures');
const similarMiniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarMiniatures = createSimilarObjects();

const NewMiniaturesFragment = document.createDocumentFragment();

similarMiniatures.forEach(({url, likes, comments}) => {
  const MiniatureElement = similarMiniaturesTemplate.cloneNode(true);
  MiniatureElement.querySelector('.picture__img').src = url;
  MiniatureElement.querySelector('.picture__comments').textContent = comments.message.length;
  MiniatureElement.querySelector('.picture__likes').textContent = likes;
  NewMiniaturesFragment.append(MiniatureElement);
});

similarNewMiniatures.append(NewMiniaturesFragment);
