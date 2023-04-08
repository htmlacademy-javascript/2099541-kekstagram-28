import {compareRandom, changeClass} from './functions.js';
import {MAX_RANDOM_MINIATURES} from './data.js';
import {generateNewMiniatures} from './generate-miniatures.js';

const sortContainer = document.querySelector('.img-filters');
//const defaultSort = document.querySelector('#filter-default');
const btnSortForm = document.querySelector('.img-filters__form').children;
//const randomtSort = document.querySelector('#filter-random');
//const discussSort = document.querySelector('#filter-discussed');

const activeSortClass = 'img-filters__button--active';

const showSorting = () => {
  sortContainer.classList.remove('img-filters--inactive');
};

const deletMiniatures = () => {
  const personalMiniatures = document.querySelectorAll('.picture');
  if (personalMiniatures) {
    personalMiniatures.forEach((personalMiniature) => {
      personalMiniature.remove();
    });
  }
};

const sortRandomMiniatures = (arr) => {
  const newRandomMiniatures = arr.sort(compareRandom);

  return newRandomMiniatures.slice(0, MAX_RANDOM_MINIATURES);
};

const sortDiscussMiniatures = (arr) => {
  const discussMiniatures = arr.slice().sort((arrItemA, arrItemB) => {
    return arrItemB.comments.length - arrItemA.comments.length;
  });

  return discussMiniatures;
};

const generateDefaultMiniatures = (arr) => {
    deletMiniatures();
    generateNewMiniatures(arr);
};

const generateRandomMiniatures = (arr) => {
      deletMiniatures();
      generateNewMiniatures(sortRandomMiniatures(arr));
};

const generateDiscussMiniatures = (arr) => {
    deletMiniatures();
    generateNewMiniatures(sortDiscussMiniatures(arr));
};

const setBtnClick = (cb) => {
  for (const btn of btnSortForm) {
    btn.addEventListener('click', () => {
      changeClass(btn, activeSortClass, btnSortForm);
      cb(btn);
  });
  }
};

const reGenerateMiniatures = (arr, btn) => {
  if (btn.id === 'filter-random') {
    generateRandomMiniatures(arr);
  }

  if (btn.id === 'filter-discussed') {
    generateDiscussMiniatures(arr);
  }

  generateDefaultMiniatures(arr);
};


export {showSorting, reGenerateMiniatures, setBtnClick};
