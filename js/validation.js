import {userModalHashtags} from './open-user-form.js';
import {hashtagRules} from './regexp.js';

const userModalForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(userModalForm);

pristine.addValidator(
  userModalHashtags,
  hashtagRules,
  'хэштэг составлен не по правилам'
);

const hashtags = userModalHashtags.Value;

const validateHashtagsLength = () => hashtags.length > 140;

pristine.addValidator(
  userModalHashtags,
  validateHashtagsLength,
  'превышено максимальное количество символов'
);

//const arrHashtags = hashtags.split(' ');

const validateHashtagsNumber = () => hashtags.split(' ').length > 5;

pristine.addValidator(
  userModalHashtags,
  validateHashtagsNumber,
  'превышено количество хэштэгов'
);

const validateSimilarHashtags = () => {
  const values = [];
  // eslint-disable-next-line for-direction
  for (let i = 0; i > hashtags.split(' ').length; i++) {
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
