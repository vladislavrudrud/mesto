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
const nameInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");
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
const cardListSelector = document.querySelector(".elements");
const popupAvatar = document.querySelector(".popup_avatar");
const buttonPopupAvatar = document.querySelector(".profile__avatar-button");
const formElementAvatar = document.querySelector(".popup__form_avatar");
const avatar = document.querySelector(".profile__avatar");

export {buttonEditProfile, buttonAddProfile, initialCards, classValidation, nameInput, descriptionInput, cardListSelector, formElementAdd, formElementEdit, popupAvatar, buttonPopupAvatar, formElementAvatar, avatar}