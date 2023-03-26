import {similarNewMiniatures} from './generate-miniatures.js';
import {isEscapeKey} from './functions.js';
import {descriptionObjects} from './main.js';
import {COMMENTS_PER_PORTION} from './data.js';

const userBigPicture = document.querySelector('.big-picture');
const bigPicturePreview = userBigPicture.querySelector('.big-picture__preview');
const bigPictureOpen = similarNewMiniatures;
const bigPictureClose = bigPicturePreview.querySelector('.big-picture__cancel');
const newBigPicture = bigPicturePreview.querySelector('#big-picture__img');
const newLikesCount = bigPicturePreview.querySelector('#likes-count');
const newCommentsCount = bigPicturePreview.querySelector('#comments-count');
const rollBody = document.querySelector('body');
const commentsCount = bigPicturePreview.querySelector('.social__comment-count');
const commentsLoader = bigPicturePreview.querySelector('.comments-loader');
const commentsList = bigPicturePreview.querySelector('.social__comments');
const commentItem = commentsList.querySelector('.social__comment');
const addCommentsButton = bigPicturePreview.querySelector('.social__comments-loader');

let commentsShown = 0;
let comments = [];

const onPictureKeydown = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
    userBigPicture.classList.add('hidden');
    rollBody.classList.remove('modal-open');
  }
};

const createComment = ((commentData) => {
  const comment = commentItem.cloneNode(true);
  comment.querySelector('.social__picture').src = commentData.avatar;
  comment.querySelector('.social__picture').alt = commentData.name;
  comment.querySelector('.social__text').textContent = commentData.message;

  return comment;
});

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const commentsFragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(comments[i]);
    commentsFragment.append(commentElement);
  }

  commentsList.innerHTML = '';
  commentsList.append(commentsFragment);
  commentsCount.innerHTML = `${commentsShown} из <span class="comments-count" id="comments-count">${comments.length}</span> комментариев`;
};

const openUserPicture = (evt) => {
  if (evt.target.closest('.picture')) {
    userBigPicture.classList.remove('hidden');
    rollBody.classList.add('modal-open');
    const target = evt.target.closest('.picture');
    const currentData = descriptionObjects.find((item) => item.id === Number(target.dataset.id));
    newBigPicture.src = currentData.url;
    newBigPicture.alt = currentData.description;
    newLikesCount.textContent = currentData.likes;
    newCommentsCount.textContent = currentData.comments.length;
    comments = currentData.comments;
    commentsShown = 0;
    renderComments();
  }

  userBigPicture.addEventListener ('focusin', () => document.removeEventListener('keydown', onPictureKeydown));
  userBigPicture.addEventListener ('focusout', () => document.addEventListener('keydown', onPictureKeydown));

  document.addEventListener('keydown', onPictureKeydown,);
};

const closeUserPicture = () => {
  userBigPicture.classList.add('hidden');
  rollBody.classList.remove('modal-open');

  document.removeEventListener('keydown', onPictureKeydown);
};

addCommentsButton.addEventListener('click', renderComments);

bigPictureOpen.addEventListener('click', (evt) => {
  openUserPicture(evt);
});

bigPictureClose.addEventListener('click', () => {
  closeUserPicture();
});

export {rollBody};
