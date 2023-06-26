const popupEdit = document.querySelector('.popup_edit_button');
const edit = document.querySelector('.profile__edit-button');
const closed = document.querySelector('.popup__closed');
const popupAdd = document.querySelector('.popup_add_button');
const formElementAdd = popupAdd.querySelector('.popup__form');
const formElementEdit = popupEdit.querySelector('.popup__form');
const popupTypeImage = document.querySelector('.popup_type_image');
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
const author = document.querySelector('.profile__author');
const description = document.querySelector('.profile__description');
const add = document.querySelector('.profile__add-button');
const closedAdd = popupAdd.querySelector('.popup__closed');
const closedEdit = popupEdit.querySelector('.popup__closed');
const cards = document.querySelector('.elements');
const cardTemplate = document.querySelector('#template').content;
const cardName = document.querySelector('#card-name');
const cardLink = document.querySelector('#card-link');
const popupPhoto = document.querySelector('.popup__photo');
const popupCaption = document.querySelector('.popup__caption');
const closedPhoto = popupTypeImage.querySelector('.popup__closed');


  const createCard = ({name, link}) => {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const elementPhoto = cardElement.querySelector('.element__photo');
    const elementClosed = cardElement.querySelector('.element__closed');
    const elementTitle = cardElement.querySelector('.element__title');
    const elementButton = cardElement.querySelector('.element__button');

    elementPhoto.alt = name;
    elementTitle.textContent = name;
    elementPhoto.src = link;

    elementButton.addEventListener('click', function() {
        elementButton.classList.toggle('element__button-active');
    });

    elementClosed.addEventListener('click', function() {
        cardElement.remove()
    });
    elementPhoto.addEventListener('click', function() {
        popupPhoto.src = link;
        popupPhoto.alt = name;
        popupCaption.textContent = name;
        popupOpen(popupTypeImage);
    })
    return cardElement;
  };
    const addCards = () => {
        initialCards.forEach(function (cardTemp) {
        const cardElement = createCard(cardTemp);
        cards.append(cardElement);
        });
    }
    const handleFormSubmitAdd = (evt) => {
        evt.preventDefault();
        const cardElement = createCard({
            name: cardName.value,
            link: cardLink.value
        })
        cards.prepend(cardElement);
        popupClosed(popupAdd);
    };
edit.addEventListener('click', function () {
    popupOpen(popupEdit);
    nameInput.value = author.textContent;
    descriptionInput.value = description.textContent;
});
const popupOpen = (popupElement) => {
    popupElement.classList.add('popup_opened');
};

const popupClosed = (popupElement) => {
    popupElement.classList.remove('popup_opened');
};

const handleFormSubmitEdit = (evt) => {
    evt.preventDefault();
    author.textContent = nameInput.value;
    description.textContent = descriptionInput.value;
    popupClosed(popupEdit);
};
 
add.addEventListener('click', function () {
    popupOpen(popupAdd);
});

closedEdit.addEventListener('click', function () {
    popupClosed(popupEdit);
});

closedAdd.addEventListener('click', function () {
    popupClosed(popupAdd);
});

closedPhoto.addEventListener('click', function () {
    popupClosed(popupTypeImage);
});

formElementEdit.addEventListener('submit', handleFormSubmitEdit);
formElementAdd.addEventListener('submit', handleFormSubmitAdd);
addCards()