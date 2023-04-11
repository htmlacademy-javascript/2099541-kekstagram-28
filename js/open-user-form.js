import {similarNewMiniatures} from './generate-miniatures.js';
import {rollBody} from './open-big-picture.js';
import {isEscapeKey} from './functions.js';
import {resetScale} from './scale.js';
import {resetEffects} from './slider-effects.js';
import {showPreviewImg} from './load-img.js';

const downloadPicture = similarNewMiniatures.querySelector('#upload-file');
const openModal = similarNewMiniatures.querySelector('.img-upload__overlay');
const closeModal = similarNewMiniatures.querySelector('.img-upload__cancel');
const userModalHashtags = openModal.querySelector('.text__hashtags');
const userModalComment = openModal.querySelector('.text__description');

const clearErrMessage = () => {
  const errTextMessages = document.querySelectorAll('.pristine-error');
  if (errTextMessages) {
    errTextMessages.forEach((errTextMessage) => {
      errTextMessage.textContent = '';
    });
  }
};

const onModalKeydown = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
    downloadPicture.value = '';
    clearErrMessage();
    openModal.classList.add('hidden');
    rollBody.classList.remove('modal-open');
  }
};

const openUserModal = () => {
  openModal.classList.remove('hidden');
  rollBody.classList.add('modal-open');

  openModal.addEventListener ('focusin', () => document.removeEventListener('keydown', onModalKeydown));
  openModal.addEventListener ('focusout', () => document.addEventListener('keydown', onModalKeydown));

  document.addEventListener('keydown', onModalKeydown);
};

const closeUserModal = () => {
  openModal.classList.add('hidden');
  rollBody.classList.remove('modal-open');
  downloadPicture.value = '';
  resetScale();
  resetEffects();
  clearErrMessage();

  document.removeEventListener('keydown', onModalKeydown);
};

downloadPicture.addEventListener('input', () => {
  openUserModal();
  showPreviewImg();
});

closeModal.addEventListener('click', () => {
  closeUserModal();
});

export {userModalHashtags, userModalComment, openUserModal, closeUserModal};
