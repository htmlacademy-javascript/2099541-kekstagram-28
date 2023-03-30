import {userModalHashtags, userModalComment} from './open-user-form.js';
import {MAX_HASHTAG_SSYMBOL_LENGTH, MAX_HASHTAGS_ARRAY_LENGTH, MAX_TEXTAREA_LENGTH} from './data.js';
import {isValidHashtag} from './regexp.js';
import {showOkMessage, showErrMessage, closeOkMessage, closeErrMessage} from './submit-modal.js';

const userModalForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(userModalForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
}, false);

pristine.addValidator(
  userModalHashtags,
  isValidHashtag,
  'хэштэг составлен не по правилам'
);

userModalHashtags.addEventListener('focusin', () => {
  pristine.reset();
});

userModalHashtags.addEventListener('focusout', () => {
  pristine.reset();
});

const validateHashtagsLength = () => userModalHashtags.value.trim().length <= MAX_HASHTAG_SSYMBOL_LENGTH;

pristine.addValidator(
  userModalHashtags,
  validateHashtagsLength,
  'превышено максимальное количество символов'
);

const validateCommentLength = () => userModalComment.value.trim().length <= MAX_TEXTAREA_LENGTH;

pristine.addValidator(
  userModalComment,
  validateCommentLength,
  'превышено максимальное количество символов'
);

const validateHashtagsNumber = () => userModalHashtags.value.trim().split(' ').length < MAX_HASHTAGS_ARRAY_LENGTH;

pristine.addValidator(
  userModalHashtags,
  validateHashtagsNumber,
  'превышено количество хэштэгов'
);

const validateSimilarHashtags = () => {
  const values = [];
  for (let i = 0; i < userModalHashtags.value.trim().split(' ').length; i++) {
    const value = userModalHashtags.value.trim().split(' ')[i];
    if (values.indexOf(value) !== -1) {
      return false;
    }
    values.push(value);
  }
  return true;
};

pristine.addValidator(
  userModalHashtags,
  validateSimilarHashtags,
  'присутствует повторяющйся хэштэг'
);

const setUserFormSubmit = (onSuccess) => {
  userModalForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);

      fetch('https://28.javascript.pages.academy/kekstagram',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
            showOkMessage();
            closeOkMessage();
          } else {
            showErrMessage();
            closeErrMessage();
          }
        })
        .catch(() => {
          showErrMessage();
          closeErrMessage();
        });
    }
  });
};

export {setUserFormSubmit};
