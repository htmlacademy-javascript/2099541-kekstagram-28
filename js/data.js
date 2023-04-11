const COMMENTS_PER_PORTION = 5;

const MAX_HASHTAG_SSYMBOL_LENGTH = 104;
const MAX_HASHTAGS_ARRAY_LENGTH = 5;
const MAX_TEXTAREA_LENGTH = 140;

const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const ALERT_DURATION = 5000;

const MAX_RANDOM_MINIATURES = 10;

const TYME_OUT_OF_DELAY = 500;

const defaultFilter = {
  name: 'none',
  style: 'none',
  min: 0,
  max: 0,
  step: 0,
  unit: '',
};

const chromeFilter = {
  name: 'chrome',
  style: 'grayscale',
  min: 0,
  max: 1,
  step: 0.1,
  unit: '',
};

const sepiaFilter = {
  name: 'sepia',
  style: 'sepia',
  min: 0,
  max: 1,
  step: 0.1,
  unit: '',
};

const marvinFilter = {
  name: 'marvin',
  style: 'invert',
  min: 0,
  max: 100,
  step: 1,
  unit: '%',
};

const phobosFilter = {
  name: 'phobos',
  style: 'blur',
  min: 0,
  max: 3,
  step: 0.1,
  unit: 'px',
};

const heatFilter = {
  name: 'heat',
  style: 'brightness',
  min: 1,
  max: 3,
  step: 0.1,
  unit: '',
};

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

export {
  COMMENTS_PER_PORTION,
  MAX_HASHTAG_SSYMBOL_LENGTH,
  MAX_HASHTAGS_ARRAY_LENGTH,
  MAX_TEXTAREA_LENGTH,
  SCALE_STEP,
  DEFAULT_SCALE,
  MIN_SCALE,
  MAX_SCALE,
  defaultFilter,
  chromeFilter,
  sepiaFilter,
  marvinFilter,
  phobosFilter,
  heatFilter,
  ALERT_DURATION,
  MAX_RANDOM_MINIATURES,
  TYME_OUT_OF_DELAY,
  Filter, FILE_TYPES
};
