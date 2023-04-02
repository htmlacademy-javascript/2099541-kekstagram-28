import {userModalHashtags} from './open-user-form.js';

const hashtagRules = /^#[a-zа-яё0-9]{1,19}$/i;

const isValidHashtag = (tag) => {
  if (userModalHashtags.value === '') {
    return true;
  } else {
    return hashtagRules.test(tag);
  }
};

export {isValidHashtag};
