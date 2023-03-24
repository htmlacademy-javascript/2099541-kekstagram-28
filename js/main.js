import {similarObjectsCount} from './data.js';
import {createSimilarObjects} from './functions.js';
import {createObject} from './generate-objects.js';
import {generateNewMiniatures} from './generate-miniatures.js';
import './open-big-picture.js';
import './open-user-form.js';
import './validation.js';
import './scale.js';
import './slider-effects.js';

const descriptionObjects = createSimilarObjects(similarObjectsCount, createObject);
generateNewMiniatures(descriptionObjects);

export {descriptionObjects};
