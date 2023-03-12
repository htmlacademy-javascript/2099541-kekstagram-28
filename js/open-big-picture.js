import {similarNewMiniatures} from './generate-miniatures.js';
import {isEscapeKey} from './functions.js';

const noRollBody = document.querySelector('body');
const userBigPicture = document.querySelector('.big-picture');
const bigPicturePreview = userBigPicture.querySelector('.big-picture__preview');
const bigPictureOpen = similarNewMiniatures;
const hideCommentsCount = bigPicturePreview.querySelector('.social__comment-count');
const hideCommentsLoader = bigPicturePreview.querySelector('.comments-loader');
const bigPictureClose = bigPicturePreview.querySelector('.big-picture__cancel');

bigPictureOpen.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    userBigPicture.classList.remove('hidden');
  }

  hideCommentsCount.classList.add('hidden');
  hideCommentsLoader.classList.add('hidden');
  noRollBody.classList.add('modal-open');

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
