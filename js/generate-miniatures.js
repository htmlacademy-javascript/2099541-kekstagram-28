const similarNewMiniatures = document.querySelector('.pictures');
const similarMiniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const newMiniaturesFragment = document.createDocumentFragment();

const generateNewMiniatures = (descriptionObjects) => {
  descriptionObjects.forEach((objectsItem) => {
    const miniatureElement = similarMiniaturesTemplate.cloneNode(true);
    miniatureElement.querySelector('.picture__img').src = objectsItem.url;
    miniatureElement.querySelector('.picture__img').alt = objectsItem.description;
    miniatureElement.querySelector('.picture__comments').textContent = objectsItem.comments.length;
    miniatureElement.querySelector('.picture__likes').textContent = objectsItem.likes;
    miniatureElement.dataset.id = objectsItem.id;
    miniatureElement.tabindex = 0;
    newMiniaturesFragment.append(miniatureElement);
  });

  similarNewMiniatures.append(newMiniaturesFragment);
};

export {generateNewMiniatures, similarNewMiniatures};
