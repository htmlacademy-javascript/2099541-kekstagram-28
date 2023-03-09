const similarNewMiniatures = document.querySelector('.pictures');
const similarMiniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const newMiniaturesFragment = document.createDocumentFragment();

export function generateNewMiniatures(descriptionObjects) {
  descriptionObjects.forEach((objectsItem) => {
    const miniatureElement = similarMiniaturesTemplate.cloneNode(true);
    miniatureElement.querySelector('.picture__img').src = objectsItem.url;
    miniatureElement.querySelector('.picture__comments').textContent = objectsItem['comments'].length;
    miniatureElement.querySelector('.picture__likes').textContent = objectsItem.likes;
    newMiniaturesFragment.append(miniatureElement);
  });

  similarNewMiniatures.append(newMiniaturesFragment);
}
