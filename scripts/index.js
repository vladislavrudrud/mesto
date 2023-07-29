import { Card } from "./card.js";
import { FormValidator } from "./FormValidator.js";

const classValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__add',
  inactiveButtonClass: 'popup__add_invalid',
  inputErrorClass: 'popup__input_error_invalid',
}; 
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const popupEdit = document.querySelector(".popup_edit_button");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const popupAdd = document.querySelector(".popup_add_button");
const formElementAdd = popupAdd.querySelector(".popup__form_type_card");
const formElementEdit = popupEdit.querySelector(".popup__form_type_profile");
const popupTypeImage = document.querySelector(".popup_type_image");
const nameInput = document.getElementById("name");
const descriptionInput = document.getElementById("description");
const authorEdit = document.querySelector(".profile__author");
const descriptionEdit = document.querySelector(".profile__description");
const buttonAddProfile = document.querySelector(".profile__add-button");
const buttonCloseAdd = popupAdd.querySelector(".popup__closed");
const buttonCloseEdit = popupEdit.querySelector(".popup__closed");
const cardsTemplate = document.querySelector(".elements");
const cardName = document.querySelector("#card-name");
const cardLink = document.querySelector("#card-link");
const popupPhoto = document.querySelector(".popup__photo");
const popupCaption = document.querySelector(".popup__caption");
const buttonClosePhoto = popupTypeImage.querySelector(".popup__closed");
const popupFormCard = document.querySelector("#popup-form");
const cardValidation = new FormValidator(formElementAdd, classValidation);
const profileValidation = new FormValidator(formElementEdit, classValidation);
cardValidation.enableValidation();
profileValidation.enableValidation();

function handleClickOpen(link, name) {
  console.log("open");
  popupPhoto.src = link;
  popupPhoto.alt = name;
  popupCaption.textContent = name;
  openPopup(popupTypeImage);
}

const createCard = (data) => {
  const newCard = new Card(data, handleClickOpen, "#template");
  const cardElement = newCard.createCard();
  return cardElement
}

  initialCards.forEach(function (data) {
    const cardElement = createCard(data);
    cardsTemplate.append(cardElement);
  });

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
  profileValidation.resetValid();
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
  cardValidation.resetValid();
  formElementAdd.reset();
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














