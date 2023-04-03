import {isEscapeKey} from './functions.js';
import {rollBody} from './open-big-picture.js';

const submitMessagePlaceOk = document.querySelector('body');
const submitOkMessageTemplate = document.querySelector('#success').content.querySelector('.success');

const messageOkElement = submitOkMessageTemplate.cloneNode(true);
submitMessagePlaceOk.append(messageOkElement);
messageOkElement.classList.add('hidden');

const submitOkMessageContainer = document.querySelector('.success');
const closeModalSubmitOk = document.querySelector('.success__button');

const closeOkMessage = () => {
  submitOkMessageContainer.classList.add('hidden');
  rollBody.classList.remove('modal-open');
};

const onModalKeydownOk = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeOkMessage();
  }
};

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('success')) {
    closeOkMessage();
  }
});

const showOkMessage = () => {
  submitOkMessageContainer.classList.remove('hidden');
  rollBody.classList.add('modal-open');

  document.addEventListener('keydown', onModalKeydownOk);
};

closeModalSubmitOk.addEventListener('click', () => {
  closeOkMessage();
});

export {showOkMessage};
