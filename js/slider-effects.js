import {EFFECTS} from './data.js';
import {imagePreview} from './scale.js';

const effectsElement = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectValue = document.querySelector('.effect-level__value');

const DEFAULTEFFECT = EFFECTS[0];
let actualEffect = DEFAULTEFFECT;

const isDefault = () => actualEffect === DEFAULTEFFECT;

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: actualEffect.min,
      max: actualEffect.max
    },
    step: actualEffect.step,
    start: actualEffect.max,
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    actualEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
    imagePreview.className = `effects__preview--${actualEffect.name}`;
    updateSlider();
  }
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  imagePreview.style.filter = isDefault()
    ? DEFAULTEFFECT.style
    : `${actualEffect.style}(${sliderValue}${actualEffect.unit})`;
  effectValue.value = sliderValue;
};

const resetEffects = () => {
  actualEffect = DEFAULTEFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULTEFFECT.min,
    max: DEFAULTEFFECT.max,
  },
  start: DEFAULTEFFECT.max,
  step: DEFAULTEFFECT.step,
  connect: 'lower',
});

hideSlider();

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};
