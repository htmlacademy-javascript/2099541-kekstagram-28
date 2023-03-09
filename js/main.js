import {createSimilarObjects} from './generate-objects.js';
import {generateNewMiniatures} from './generate-miniatures.js';

const descriptionObjects = createSimilarObjects();
generateNewMiniatures(descriptionObjects);
