import {NAMES, MESSAGE} from './data.js';
import {getRandomInteger, createRandomUniqId, showArrayRand, createSimilarObjects} from './functions.js';

const arrMessage = MESSAGE.split('! ', 1).join();
const finalArrMessage = MESSAGE.slice(13).split('. ');
finalArrMessage.unshift(arrMessage);

const generateId = createRandomUniqId(1, 25);
const generateUrl = createRandomUniqId(1, 25);
const generateCommentsId = createRandomUniqId(1, 5000);

const urlIndex = () => `photos/${generateUrl()}.jpg`;

const avatarIndex = () => `img/avatar-${getRandomInteger(1, 6)}.svg`;

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

const createComments = () => ({
  id: generateCommentsId(),
  avatar: avatarIndex(),
  message: createMessage(finalArrMessage),
  name: showArrayRand(NAMES),
});

const createObject = () => ({
  id: generateId(),
  url: urlIndex(),
  description: 'оцените фотку!)',
  likes: getRandomInteger(15, 200),
  comments: createSimilarObjects(getRandomInteger(1, 2), createComments),
});

export {createObject};
