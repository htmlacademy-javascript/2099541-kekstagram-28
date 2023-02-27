const getStringLength = (string, length) => string.length <= length;

const getMatchPalindrome = (palindrome) => {
  const tempString = palindrome.toLowerCase().replaceAll(' ', '');
  const half = Math.floor(tempString.length / 2);
  for (let i = 0; i < half; i++) {
    return tempString[i] === tempString[tempString.length - i - 1];
  }
};

const getNumber = (string) => {
  let numb = string.match(/\d/g);
  numb = numb.join('');
  return numb;
};

const getNewString = (string, minLength, symbols) => {
  const newString = string.padStart(minLength, symbols);
  return newString;
};

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

getStringLength();
getMatchPalindrome();
getNumber();
getNewString();

const NAMES = [
  'Иван',
  'Хуан',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Сергей',
  'Виталина',
  'Ефрем',
  'Наталья',
  'Вадим',
  'Татьяна',
];

const MESSAGE = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';

const arrMessage = MESSAGE.split('! ', 1).join();
const finalArrMessage = MESSAGE.slice(13).split('. ');
finalArrMessage.unshift(arrMessage);

const generateId = createRandomUniqId(1, 25);
const generateUrl = createRandomUniqId(1, 25);
const generateCommentsId = createRandomUniqId(1, 5000);

const urlIndex = () => {
  return `photos/${generateUrl()}.jpg`;
};

const avatarIndex = () => {
  return `img/avatar-${getRandomInteger(1, 6)}.svg`;
};

const createMessage = (array) => {
  let newMessage = getRandomInteger(0, array.length - 1);
  if (newMessage === array.length - 1) {
    newMessage = array[array.length - 1];
  } else if (newMessage === 0) {
    newMessage = `${array[0]}!`;
  } else {
    newMessage = `${array[getRandomInteger(0, array.length - 2)]}.`;
  }
  return newMessage;
};

const similarObjectsCount = 25;

const createObject = () => ({
  id: generateId(),
  url: urlIndex(),
  description: 'оцените фотку!)',
  likes: getRandomInteger(15, 200),
  comments: {
    id: generateCommentsId(),
    avatar: avatarIndex(),
    message: createMessage(finalArrMessage),
    name: showArrayRand(NAMES),
    },
});

const createSimilarObjects = () =>
  Array.from({ length: similarObjectsCount }, createObject);

createSimilarObjects();
