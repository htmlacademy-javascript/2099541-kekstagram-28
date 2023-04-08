import {generateNewMiniatures} from './generate-miniatures.js';
import {openUserPicture} from './open-big-picture.js';
import {closeUserModal} from './open-user-form.js';
import {setUserFormSubmit} from './validation.js';
import './scale.js';
import './slider-effects.js';
import {getData} from './api.js';
import {showAlert} from './alerts.js';
import {showSorting, reGenerateMiniatures, setBtnClick} from './sort.js';
import {debounce} from './functions.js';
import {TYME_OUT_OF_DELAY} from './data.js';


getData()
  .then((miniatures) => {
    generateNewMiniatures(miniatures);
    showSorting();
    setBtnClick(debounce((btn) => {
      reGenerateMiniatures(miniatures, btn);
    }, TYME_OUT_OF_DELAY));
    openUserPicture(miniatures);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit(closeUserModal);
