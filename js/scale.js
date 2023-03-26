import {SCALE_STEP, DEFAULT_SCALE, MIN_SCALE, MAX_SCALE} from './data.js';

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
  let nextValue = currentValue - SCALE_STEP;
  if (nextValue < MIN_SCALE) {
    nextValue = MIN_SCALE;
  }
  imageScale(nextValue);
});

scaleBigger.addEventListener('click', () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let nextValue = currentValue + SCALE_STEP;
  if (nextValue > MAX_SCALE) {
    nextValue = MAX_SCALE;
  }
  imageScale(nextValue);
});

const resetScale = () => {
  imageScale(DEFAULT_SCALE);
};

export {resetScale, imagePreview};
