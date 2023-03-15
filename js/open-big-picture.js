import {similarNewMiniatures} from './generate-miniatures.js';
import {isEscapeKey} from './functions.js';
import {descriptionObjects} from './main.js';

const userBigPicture = document.querySelector('.big-picture');
const bigPicturePreview = userBigPicture.querySelector('.big-picture__preview');
const bigPictureOpen = similarNewMiniatures;
const newBigPicture = bigPicturePreview.querySelector('#big-picture__img');
const newLikesCount = bigPicturePreview.querySelector('#likes-count');
const newCommentsCount = bigPicturePreview.querySelector('#comments-count');
const rollBody = document.querySelector('body');
const commentsCount = bigPicturePreview.querySelector('.social__comment-count');
const commentsLoader = bigPicturePreview.querySelector('.comments-loader');
const bigPictureClose = bigPicturePreview.querySelector('.big-picture__cancel');


bigPictureOpen.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    userBigPicture.classList.remove('hidden');
    const target = evt.target.closest('.picture');
    const currentData = descriptionObjects.find((item) => item.id === Number(target.dataset.id));
    newBigPicture.src = currentData.url;
    newBigPicture.alt = currentData.description;
    newLikesCount.textContent = currentData.likes;
    newCommentsCount.textContent = currentData.comments.length;
    //console.log(currentData.comments);

    if (currentData.comments.length > 1) {
      const generateDataComments = (arrComments) => {
        const newCommentsDataPersons = bigPicturePreview.querySelectorAll('.social__comment');
        for (let i = 0; i < newCommentsDataPersons.length; i++) {
          const newCommentsDataPerson = newCommentsDataPersons[i];
          newCommentsDataPerson.querySelector('.social__picture').src = arrComments[i].avatar;
          newCommentsDataPerson.querySelector('.social__picture').alt = arrComments[i].name;
          newCommentsDataPerson.querySelector('.social__text').textContent = arrComments[i].message;
        }
      };
      generateDataComments(currentData.comments);
    } else {
      const generateDataComments = (arrComments) => {
        const newCommentsDataPerson = bigPicturePreview.querySelector('.social__comment');
        newCommentsDataPerson.querySelector('.social__picture').src = arrComments[0].avatar;
        newCommentsDataPerson.querySelector('.social__picture').alt = arrComments[0].name;
        newCommentsDataPerson.querySelector('.social__text').textContent = arrComments[0].message;
        const commentsList = bigPicturePreview.querySelector('.social__comments');
        commentsList.removeChild(commentsList.children[1]);
      };
      generateDataComments(currentData.comments);
    }
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
