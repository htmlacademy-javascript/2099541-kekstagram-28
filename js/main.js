import {getRandomInteger, createRandomUniqId, showArrayRand} from './functions.js';

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

const MESSAGE =
`Всё отлично! В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра.
В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`;

const generateId = createRandomUniqId (1, 25);
const generateUrl = createRandomUniqId (1, 25);
const generateCommentsId = createRandomUniqId (1, 5000);

const urlIndex = () => {
  return `photos/${generateUrl()}.jpg`;
};

const avatarIndex = () => {
  return `img/avatar-${getRandomInteger(1, 6)}.svg`;
};

const createMessage = (allComment) => {
  const ARRMESSAGE = string.split('. ');
  const newMessage = ARRMESSAGE[getRandomInteger(0, 8)] + '.' +  ARRMESSAGE[getRandomInteger(0, 8)] + '.';
  return newMessage;
};

const createObject = () => {
const profileFoto = {
  id: generateId(),
  url: urlIndex(),
  description: 'оцените фотку!)',
  likes: getRandomInteger(15, 200),
  comments: {
    id: generateCommentsId(),
    avatar: avatarIndex(),
    message: createMessage(MESSAGE),
    name: showArrayRand(NAMES),
  },
}
};


