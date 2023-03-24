import {SCALESTEP, DEFAULTSCALE, MINSCALE, MAXSCALE} from './data.js';

const scaleContainer = document.querySelector('.img-upload__scale');
const scaleSmaller = scaleContainer.querySelector('.scale__control--smaller');
const scaleBigger = scaleContainer.querySelector('.scale__control--bigger');
const scaleValue = scaleContainer.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const imageScale = (value) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

scaleSmaller.addEventListener('click', () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let nextValue = currentValue - SCALESTEP;
  if (nextValue < MINSCALE) {
    nextValue = MINSCALE;
  }
  imageScale(nextValue);
});

scaleBigger.addEventListener('click', () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let nextValue = currentValue + SCALESTEP;
  if (nextValue > MAXSCALE) {
    nextValue = MAXSCALE;
  }
  imageScale(nextValue);
});

const resetScale = () => {
  imageScale(DEFAULTSCALE);
};

export {resetScale, imagePreview};
