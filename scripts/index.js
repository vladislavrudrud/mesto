const popupEdit = document.querySelector(".popup_edit_button");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const popupAdd = document.querySelector(".popup_add_button");
const formElementAdd = popupAdd.querySelector(".popup__form");
const formElementEdit = popupEdit.querySelector(".popup__form");
const popupTypeImage = document.querySelector(".popup_type_image");
const nameInput = document.getElementById("name");
const descriptionInput = document.getElementById("description");
const authorEdit = document.querySelector(".profile__author");
const descriptionEdit = document.querySelector(".profile__description");
const buttonAddProfile = document.querySelector(".profile__add-button");
const buttonCloseAdd = popupAdd.querySelector(".popup__closed");
const buttonCloseEdit = popupEdit.querySelector(".popup__closed");
const cardsTemplate = document.querySelector(".elements");
const cardTemplate = document.querySelector("#template").content;
const cardName = document.querySelector("#card-name");
const cardLink = document.querySelector("#card-link");
const popupPhoto = document.querySelector(".popup__photo");
const popupCaption = document.querySelector(".popup__caption");
const buttonClosePhoto = popupTypeImage.querySelector(".popup__closed");

const popupFormCard = document.querySelector("#popup-form");

const createCard = ({ name, link }) => {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const elementPhoto = cardElement.querySelector(".element__photo");
  const elementClosed = cardElement.querySelector(".element__closed");
  const elementTitle = cardElement.querySelector(".element__title");
  const elementButton = cardElement.querySelector(".element__button");

  elementPhoto.alt = name;
  elementTitle.textContent = name;
  elementPhoto.src = link;

  elementButton.addEventListener("click", function () {
    elementButton.classList.toggle("element__button-active");
  });

  elementClosed.addEventListener("click", function () {
    cardElement.remove();
  });

  elementPhoto.addEventListener("click", function () {
    popupPhoto.src = link;
    popupPhoto.alt = name;
    popupCaption.textContent = name;
    openPopup(popupTypeImage);
  });
  return cardElement;
};
const addCards = () => {
  initialCards.forEach(function (cardTemp) {
    const cardElement = createCard(cardTemp);
    cardsTemplate.append(cardElement);
  });
};
const handleFormSubmitAdd = (evt) => {
  evt.preventDefault();
  const cardElement = createCard({
    name: cardName.value,
    link: cardLink.value,
  });
  cardsTemplate.prepend(cardElement);
  popupFormCard.reset();
  closedPopup(popupAdd);
};
buttonEditProfile.addEventListener("click", function () {
  openPopup(popupEdit);
  nameInput.value = authorEdit.textContent;
  descriptionInput.value = descriptionEdit.textContent;
});

const setOverlayListener = function(evt) {
  const openPopup = document.querySelector(".popup_opened");
    if(evt.target === openPopup) {
      closedPopup(openPopup);
    };
} 

const setEscListener = function(evt) {
  if(evt.key === "Escape") {
  const openPopup = document.querySelector('.popup_opened');
  closedPopup(openPopup);
}
}

const openPopup = (popupElement) => {
  popupElement.classList.add("popup_opened");
  document.addEventListener('click', setOverlayListener);
  document.addEventListener('keydown', setEscListener);
};

const closedPopup = (popupElement) => {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener('click', setOverlayListener);
  document.removeEventListener('keydown', setEscListener);
};

const handleFormSubmitEdit = (evt) => {
  evt.preventDefault();
  authorEdit.textContent = nameInput.value;
  descriptionEdit.textContent = descriptionInput.value;
  closedPopup(popupEdit);
};

buttonAddProfile.addEventListener("click", function () {
  openPopup(popupAdd);
});

buttonCloseEdit.addEventListener("click", function () {
  closedPopup(popupEdit);
});

buttonCloseAdd.addEventListener("click", function () {
  closedPopup(popupAdd);
});

buttonClosePhoto.addEventListener("click", function () {
  closedPopup(popupTypeImage);
  
});

formElementEdit.addEventListener("submit", handleFormSubmitEdit);
formElementAdd.addEventListener("submit", handleFormSubmitAdd);
addCards();












