import {userModalHashtags, userModalComment} from './open-user-form.js';
import {MAXHASHTAGSSYMBOLLENGTH, MAXHASHTAGSARRAYLENGTH, MAXTEXTAREALENGTH} from './data.js';
import {isValidHashtag} from './regexp.js';

const userModalForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(userModalForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
}, false);

const hashtags = userModalHashtags;
const userComment = userModalComment;

pristine.addValidator(
  userModalHashtags,
  isValidHashtag,
  'хэштэг составлен не по правилам'
);

const validateHashtagsLength = () => hashtags.value.trim().length <= MAXHASHTAGSSYMBOLLENGTH;

pristine.addValidator(
  userModalHashtags,
  validateHashtagsLength,
  'превышено максимальное количество символов'
);

const validateCommentLength = () => userComment.value.trim().length <= MAXTEXTAREALENGTH;

pristine.addValidator(
  userModalComment,
  validateCommentLength,
  'превышено максимальное количество символов'
);

const validateHashtagsNumber = () => hashtags.value.trim().split(' ').length < MAXHASHTAGSARRAYLENGTH;

pristine.addValidator(
  userModalHashtags,
  validateHashtagsNumber,
  'превышено количество хэштэгов'
);

const validateSimilarHashtags = () => {
  const values = [];
  for (let i = 0; i < hashtags.value.trim().split(' ').length; i++) {
    const value = hashtags.value.trim().split(' ')[i];
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

userModalForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
