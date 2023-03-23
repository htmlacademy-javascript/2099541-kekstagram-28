import {userModalHashtags} from './open-user-form.js';

const hashtagRules = /^#[a-zа-яё0-9]{1,19}$/i;

const isValidHashtag = (tag) => {
  if (userModalHashtags.value.length === 0) {
    return true;
  } else {
    hashtagRules.test(tag);
  }
};

export {isValidHashtag};
