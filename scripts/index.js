// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');
const addButton = content.querySelector('.profile__add-button');

function addCard(name, link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').src = link;
  const deleteButton = cardElement.querySelector('.card__delete-button');

  deleteButton.addEventListener('click', () => {
    deleteCard(cardElement);
  });

  return cardElement;
}

let currentCardIndex = 0;

addButton.addEventListener('click', function(){
  if (currentCardIndex < initialCards.length) { 
    const card = addCard(
      initialCards[currentCardIndex].name,
      initialCards[currentCardIndex].link
    );
    placesList.append(card); 
    currentCardIndex++; 
  }
});

function deleteCard(cardElement) {
  cardElement.remove(); 
}
