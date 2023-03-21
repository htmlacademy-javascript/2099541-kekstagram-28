import {userModalHashtags} from './open-user-form.js';
import {MAXHASHTAGSSYMBOLLENGTH, MAXHASHTAGSARRAYLENGTH} from './data.js';
import {hashtagRules} from './regexp.js';

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
  hashtagRules,
  'хэштэг составлен не по правилам'
);

const hashtags = userModalHashtags.value.trim();

const validateHashtagsLength = () => hashtags.length > MAXHASHTAGSSYMBOLLENGTH;

pristine.addValidator(
  userModalHashtags,
  validateHashtagsLength,
  'превышено максимальное количество символов'
);

const validateHashtagsNumber = () => hashtags.split(' ').length > MAXHASHTAGSARRAYLENGTH;

pristine.addValidator(
  userModalHashtags,
  validateHashtagsNumber,
  'превышено количество хэштэгов'
);

const validateSimilarHashtags = () => {
  const values = [];
  for (let i = 0; i < hashtags.split(' ').length; i++) {
    const value = hashtags.split(' ')[i];
    if (values.indexOf(value) !== -1) {
      return true;
    }
    values.push(value);
  }
  return false;
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
