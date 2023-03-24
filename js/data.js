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

const similarObjectsCount = 25;

const MAXHASHTAGSSYMBOLLENGTH = 104;
const MAXHASHTAGSARRAYLENGTH = 5;
const MAXTEXTAREALENGTH = 140;

const SCALESTEP = 25;
const DEFAULTSCALE = 100;
const MINSCALE = 25;
const MAXSCALE = 100;

const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 0,
    step: 0,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

export {NAMES, MESSAGE, similarObjectsCount, MAXHASHTAGSSYMBOLLENGTH, MAXHASHTAGSARRAYLENGTH, MAXTEXTAREALENGTH, SCALESTEP, DEFAULTSCALE, MINSCALE, MAXSCALE, EFFECTS};
