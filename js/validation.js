import {userModalHashtags, userModalComment} from './open-user-form.js';
import {MAX_HASHTAG_SSYMBOL_LENGTH, MAX_HASHTAGS_ARRAY_LENGTH, MAX_TEXTAREA_LENGTH} from './data.js';
import {hashtagRules} from './regexp.js';
import {showAlert} from './alerts.js';
import {sendData} from './api.js';

const userModalForm = document.querySelector('.img-upload__form');
const submitBtn = document.querySelector('.img-upload__submit');

const pristine = new Pristine(userModalForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
}, false);

const isValidHashtag = (tag) => hashtagRules.test(tag);

const validateHashtag = (value) => {
  if (userModalHashtags.value === '') {
    return true;
  } else {
    const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
    return tags.every(isValidHashtag);
  }
};

pristine.addValidator(
  userModalHashtags,
  validateHashtag,
  'хэштэг составлен не по правилам'
);

const validateHashtagsLength = () => userModalHashtags.value.trim().length <= MAX_HASHTAG_SSYMBOL_LENGTH;

pristine.addValidator(
  userModalHashtags,
  validateHashtagsLength,
  'превышено максимальное количество символов'
);

const validateHashtagsNumber = () => userModalHashtags.value.trim().split(' ').length <= MAX_HASHTAGS_ARRAY_LENGTH;

pristine.addValidator(
  userModalHashtags,
  validateHashtagsNumber,
  'превышено количество хэштэгов'
);

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateSimilarHashtags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);

  return hasUniqueTags(tags);
};

pristine.addValidator(
  userModalHashtags,
  validateSimilarHashtags,
  'присутствует повторяющйся хэштэг'
);

userModalHashtags.addEventListener('focusin', () => {
  pristine.reset();
});

userModalHashtags.addEventListener('focusout', () => {
  pristine.reset();
});

const validateCommentLength = () => userModalComment.value.trim().length <= MAX_TEXTAREA_LENGTH;

pristine.addValidator(
  userModalComment,
  validateCommentLength,
  'превышено максимальное количество символов'
);

const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const blockSubmitBtn = () => {
  submitBtn.disabled = true;
  submitBtn.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitBtn = () => {
  submitBtn.disabled = false;
  submitBtn.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = (onSuccess) => {
  userModalForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitBtn();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(
          (err) => {
            showAlert(err.message);
          }
        )
        .finally(unblockSubmitBtn);
    }
  });
};

export {setUserFormSubmit};
