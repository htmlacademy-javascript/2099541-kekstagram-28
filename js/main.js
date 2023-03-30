/* import {similarObjectsCount} from './data.js';
import {createSimilarObjects} from './functions.js';
import {createObject} from './generate-objects.js'; */
import {generateNewMiniatures} from './generate-miniatures.js';
import {openUserPicture} from './open-big-picture.js';
import {closeUserModal} from './open-user-form.js';
import {setUserFormSubmit} from './validation.js';
import './scale.js';
import './slider-effects.js';

//const descriptionObjects = createSimilarObjects(similarObjectsCount, createObject);
//generateNewMiniatures(descriptionObjects);
fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((miniatures) => {
    console.log(miniatures);
    generateNewMiniatures(miniatures);
    openUserPicture(miniatures);
  }
);

setUserFormSubmit(closeUserModal);
