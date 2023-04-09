const compareRandom = () => Math.random() - 0.5;

const isEscapeKey = (evt) => evt.key === 'Escape';

const validateInputLength = (input, number) => input.value.trim().length <= number;

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {compareRandom, isEscapeKey, validateInputLength, debounce};
