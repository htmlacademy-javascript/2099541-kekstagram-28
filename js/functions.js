//const getStringLength = (string, length) => string.length <= length;

/*const getMatchPalindrome = (palindrome) => {
  const tempString = palindrome.toLowerCase().replaceAll(' ', '');
  const half = Math.floor(tempString.length / 2);
  for (let i = 0; i < half; i++) {
    return tempString[i] === tempString[tempString.length - i - 1];
  }
};*/

/*const getNumber = (string) => {
  let numb = string.match(/\d/g);
  numb = numb.join('');
  return numb;
};*/

/*const getNewString = (string, minLength, symbols) => {
  const newString = string.padStart(minLength, symbols);
  return newString;
};*/

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomUniqId = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const showArrayRand = (arr) => {
  const randText = Math.floor(Math.random() * arr.length);
  return arr[randText];
};

const createSimilarObjects = (number, object) => Array.from({length: number}, object);

const isEscapeKey = (evt) => evt.key === 'Escape';

//getStringLength();
//getMatchPalindrome();
//getNumber();
//getNewString();

export {getRandomInteger, createRandomUniqId, showArrayRand, createSimilarObjects, isEscapeKey};
