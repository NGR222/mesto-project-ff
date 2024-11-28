const placesList = document.querySelector('.places__list'); 

function createCard(cardData, deleteCard) {
  
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = cardData.name;
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function () {
    deleteCard(cardElement); 
  });

  return cardElement; 
}

function deleteCard(cardElement) {
  cardElement.remove();
}

initialCards.forEach(function (cardData) {
  const card = createCard(cardData, deleteCard); 
  placesList.append(card); 
});