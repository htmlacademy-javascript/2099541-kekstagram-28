import {
  getRandomInteger,
  createRandomUniqId,
  showArrayRand,
} from './functions.js';

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

function urlIndex() {
  return `photos/${generateUrl()}.jpg`;
}

function avatarIndex() {
  return `img/avatar-${getRandomInteger(1, 6)}.svg`;
}

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

const createObject = () => {
  const profileFoto = {
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
  };
  return profileFoto;
};

const createSimilarObjects = () =>
  Array.from({ length: similarObjectsCount }, createObject);

createSimilarObjects();
