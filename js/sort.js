import {compareRandom} from './functions.js';
import {MAX_RANDOM_MINIATURES} from './data.js';
import {generateNewMiniatures} from './generate-miniatures.js';

const sortContainer = document.querySelector('.img-filters');
const defaultSort = document.querySelector('#filter-default');
const btnSortForm = document.querySelector('.img-filters__form');
const buttons = btnSortForm.children;
const randomSort = document.querySelector('#filter-random');
const discussSort = document.querySelector('#filter-discussed');

const activeSortClass = 'img-filters__button--active';

const showSorting = () => {
  sortContainer.classList.remove('img-filters--inactive');
};

const deleteMiniatures = () => {
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

const sortDiscussMiniatures = (arr) => arr.slice().sort((arrItemA, arrItemB) => arrItemB.comments.length - arrItemA.comments.length);

const generateDefaultMiniatures = (arr) => {
  deleteMiniatures();
  generateNewMiniatures(arr);
};

const generateRandomMiniatures = (arr) => {
  deleteMiniatures();
  generateNewMiniatures(sortRandomMiniatures(arr));
};

const generateDiscussMiniatures = (arr) => {
  deleteMiniatures();
  generateNewMiniatures(sortDiscussMiniatures(arr));
};

const setBtnClick = (cb) => {
  for (const btn of buttons) {
    btn.addEventListener('click', () => {
      cb(btn);
    });
  }
};

const reGenerateMiniatures = (arr, btn) => {
  if (btn.id === 'filter-random') {
    generateRandomMiniatures(arr);
    randomSort.classList.add(activeSortClass);
    defaultSort.classList.remove(activeSortClass);
    discussSort.classList.remove(activeSortClass);
  }

  if (btn.id === 'filter-discussed') {
    generateDiscussMiniatures(arr);
    discussSort.classList.add(activeSortClass);
    defaultSort.classList.remove(activeSortClass);
    randomSort.classList.remove(activeSortClass);
  }

  if (btn.id === 'filter-default') {
    generateDefaultMiniatures(arr);
    defaultSort.classList.add(activeSortClass);
    discussSort.classList.remove(activeSortClass);
    randomSort.classList.remove(activeSortClass);
  }
};

export {showSorting, reGenerateMiniatures, setBtnClick};
