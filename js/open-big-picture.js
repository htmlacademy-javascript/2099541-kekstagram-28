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
const commentsList = bigPicturePreview.querySelector('.social__comments');
const comment = bigPicturePreview.querySelector('.social__comment');

const onDocumentKeydown = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
    userBigPicture.classList.add('hidden');
    commentsCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    rollBody.classList.remove('modal-open');
    commentsList.appendChild(comment);
  }
};

const openUserModal = (evt) => {
  if (evt.target.closest('.picture')) {
    userBigPicture.classList.remove('hidden');
    commentsCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    rollBody.classList.add('modal-open');
    const target = evt.target.closest('.picture');
    const currentData = descriptionObjects.find((item) => item.id === Number(target.dataset.id));
    newBigPicture.src = currentData.url;
    newBigPicture.alt = currentData.description;
    newLikesCount.textContent = currentData.likes;
    newCommentsCount.textContent = currentData.comments.length;

    if (currentData.comments.length > 1) {
      const newCommentsDataPersons = bigPicturePreview.querySelectorAll('.social__comment');
      for (let i = 0; i < newCommentsDataPersons.length; i++) {
        const newCommentsDataPerson = newCommentsDataPersons[i];
        newCommentsDataPerson.querySelector('.social__picture').src = currentData.comments[i].avatar;
        newCommentsDataPerson.querySelector('.social__picture').alt = currentData.comments[i].name;
        newCommentsDataPerson.querySelector('.social__text').textContent = currentData.comments[i].message;
      }
    } else {
      const newCommentsDataPerson = bigPicturePreview.querySelector('.social__comment');
      newCommentsDataPerson.querySelector('.social__picture').src = currentData.comments[0].avatar;
      newCommentsDataPerson.querySelector('.social__picture').alt = currentData.comments[0].name;
      newCommentsDataPerson.querySelector('.social__text').textContent = currentData.comments[0].message;
      commentsList.removeChild(commentsList.children[1]);
    }
  }

  document.addEventListener('keydown', onDocumentKeydown);
};

const closeUserModal = () => {
  userBigPicture.classList.add('hidden');
  commentsCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  rollBody.classList.remove('modal-open');
  commentsList.appendChild(comment);

  document.removeEventListener('keydown', onDocumentKeydown);
};

bigPictureOpen.addEventListener('click', (evt) => {
  openUserModal(evt);
});

bigPictureClose.addEventListener('click', () => {
  closeUserModal();
});
