import {isEscapeKey} from './functions.js';
import {rollBody} from './open-big-picture.js';

const submitMessagePlaceErr = document.querySelector('body');
const submitErrMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const messageErrElement = submitErrMessageTemplate.cloneNode(true);
submitMessagePlaceErr.append(messageErrElement);
messageErrElement.classList.add('hidden');

const submitErrMessageContainer = document.querySelector('.error');
const closeModalSubmitErr = document.querySelector('.error__button');

const closeErrMessage = () => {
  submitErrMessageContainer.classList.add('hidden');
  rollBody.classList.remove('modal-open');
};

const onModalKeydownErr = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrMessage();
  }
};

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('error')) {
    closeErrMessage();
  }
});

const showErrMessage = () => {
  submitErrMessageContainer.classList.remove('hidden');
  rollBody.classList.add('modal-open');

  document.addEventListener('keydown', onModalKeydownErr);
};

closeModalSubmitErr.addEventListener('click', () => {
  closeErrMessage();
});

export {showErrMessage};
