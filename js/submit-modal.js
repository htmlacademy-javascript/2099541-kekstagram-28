import {isEscapeKey} from './functions.js';
import {rollBody} from './open-big-picture.js';

const submitMessagePlace = document.querySelector('body');
const submitOkMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const submitErrMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const newMessageFragment = document.createDocumentFragment();
const closeModalSubmitOk = document.querySelector('.success__button');
const closeModalSubmitErr = document.querySelector('.error__button');
const submitOkMessageContainer = document.querySelector('.success');
const submitErrMessageContainer = document.querySelector('.error');

const onModalKeydownOk = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
    submitOkMessageContainer.remove();
    rollBody.classList.remove('modal-open');
  }
};

const onModalKeydownErr = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
    submitErrMessageContainer.remove();
    rollBody.classList.remove('modal-open');
  }
};

const showOkMessage = () => {
  const messageOkElement = submitOkMessageTemplate.cloneNode(true);
  newMessageFragment.append(messageOkElement);
  submitMessagePlace.append(newMessageFragment);
  rollBody.classList.add('modal-open');

  document.addEventListener('keydown', onModalKeydownOk);
};

const showErrMessage = () => {
  const messageErrElement = submitErrMessageTemplate.cloneNode(true);
  newMessageFragment.append(messageErrElement);
  submitMessagePlace.append(newMessageFragment);
  rollBody.classList.add('modal-open');

  document.addEventListener('keydown', onModalKeydownErr);
};

const closeOkMessage = () => {
  closeModalSubmitOk.addEventListener('click', () => {
    submitOkMessageContainer.remove();
  });

  document.removeEventListener('keydown', onModalKeydownOk);
};

const closeErrMessage = () => {
  closeModalSubmitErr.addEventListener('click', () => {
    submitErrMessageContainer.remove();
  });

  document.removeEventListener('keydown', onModalKeydownErr);
};

export {showOkMessage, showErrMessage, closeOkMessage, closeErrMessage};
