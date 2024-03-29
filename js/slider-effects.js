import {defaultFilter, chromeFilter, sepiaFilter, marvinFilter, phobosFilter, heatFilter} from './data.js';
import {imagePreview} from './scale.js';

const DEFAULT_EFFECT = defaultFilter;

const effectsElement = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectValue = document.querySelector('.effect-level__value');

let actualEffect = DEFAULT_EFFECT;

const isDefault = () => actualEffect === DEFAULT_EFFECT;

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
  if (evt.target.closest('#effect-chrome')) {
    actualEffect = chromeFilter;
    imagePreview.className = `effects__preview--${actualEffect.name}`;
    updateSlider();
  }

  if (evt.target.closest('#effect-sepia')) {
    actualEffect = sepiaFilter;
    imagePreview.className = `effects__preview--${actualEffect.name}`;
    updateSlider();
  }

  if (evt.target.closest('#effect-marvin')) {
    actualEffect = marvinFilter;
    imagePreview.className = `effects__preview--${actualEffect.name}`;
    updateSlider();
  }

  if (evt.target.closest('#effect-phobos')) {
    actualEffect = phobosFilter;
    imagePreview.className = `effects__preview--${actualEffect.name}`;
    updateSlider();
  }

  if (evt.target.closest('#effect-heat')) {
    actualEffect = heatFilter;
    imagePreview.className = `effects__preview--${actualEffect.name}`;
    updateSlider();
  }

  if (evt.target.closest('#effect-none')) {
    actualEffect = defaultFilter;
    imagePreview.className = `effects__preview--${actualEffect.name}`;
    updateSlider();
  }
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  imagePreview.style.filter = isDefault()
    ? DEFAULT_EFFECT.style
    : `${actualEffect.style}(${sliderValue}${actualEffect.unit})`;
  effectValue.value = sliderValue;
};

const resetEffects = () => {
  actualEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

hideSlider();

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};
