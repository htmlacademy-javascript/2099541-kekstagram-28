import {generateNewMiniatures} from './generate-miniatures.js';
import {openUserPicture} from './open-big-picture.js';
import {closeUserModal} from './open-user-form.js';
import {setUserFormSubmit} from './validation.js';
import './scale.js';
import './slider-effects.js';
import {getData} from './api.js';
import {showAlert} from './alerts.js';

getData()
  .then((miniatures) => {
    generateNewMiniatures(miniatures);
    openUserPicture(miniatures);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit(closeUserModal);
