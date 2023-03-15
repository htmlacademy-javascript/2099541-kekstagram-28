import {similarNewMiniatures} from './generate-miniatures.js';
import {isEscapeKey} from './functions.js';
import {descriptionObjects} from './main.js';

const rollBody = document.querySelector('body');
const userBigPicture = document.querySelector('.big-picture');
const bigPicturePreview = userBigPicture.querySelector('.big-picture__preview');
const bigPictureOpen = similarNewMiniatures;
const commentsCount = bigPicturePreview.querySelector('.social__comment-count');
const commentsLoader = bigPicturePreview.querySelector('.comments-loader');
const bigPictureClose = bigPicturePreview.querySelector('.big-picture__cancel');
const newBigPicture = bigPicturePreview.querySelector('#big-picture__img');
const newLikesCount = bigPicturePreview.querySelector('#likes-count');
const newCommentsCount = bigPicturePreview.querySelector('#comments-count');

bigPictureOpen.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    userBigPicture.classList.remove('hidden');
    const target = evt.target.closest('.picture');
    const currentData = descriptionObjects.find((item) => item.id === Number(target.dataset.id));
    //console.log(currentData);
    newBigPicture.src = currentData.url;
    newBigPicture.alt = currentData.description;
    newLikesCount.textContent = currentData.likes;
    newCommentsCount.textContent = currentData.comments.length;
  }

  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  rollBody.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      userBigPicture.classList.add('hidden');
    }
  });
});

bigPictureClose.addEventListener('click', () => {
  userBigPicture.classList.add('hidden');
});

//export {bigPicturePreview};
