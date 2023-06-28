const popupEdit = document.querySelector(".popup_edit_button");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const popupClosed = document.querySelector(".popup__closed");
const popupAdd = document.querySelector(".popup_add_button");
const formElementAdd = popupAdd.querySelector(".popup__form");
const formElementEdit = popupEdit.querySelector(".popup__form");
const popupTypeImage = document.querySelector(".popup_type_image");
const nameInput = document.getElementById("name");
const descriptionInput = document.getElementById("description");
const authorEdit = document.querySelector(".profile__author");
const descriptionEdit = document.querySelector(".profile__description");
const buttonAddProfile = document.querySelector(".profile__add-button");
const closedAdd = popupAdd.querySelector(".popup__closed");
const closedEdit = popupEdit.querySelector(".popup__closed");
const cardsTemplate = document.querySelector(".elements");
const cardTemplate = document.querySelector("#template").content;
const cardName = document.querySelector("#card-name");
const cardLink = document.querySelector("#card-link");
const popupPhoto = document.querySelector(".popup__photo");
const popupCaption = document.querySelector(".popup__caption");
const closedPhoto = popupTypeImage.querySelector(".popup__closed");

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
  cardTemplate.prepend(cardElement);
  closedPopup(popupAdd);
};
buttonEditProfile.addEventListener("click", function () {
  openPopup(popupEdit);
  nameInput.value = authorEdit.textContent;
  descriptionInput.value = descriptionEdit.textContent;
});
const openPopup = (popupElement) => {
  popupElement.classList.add("popup_opened");
};

const closedPopup = (popupElement) => {
  popupElement.classList.remove("popup_opened");
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

closedEdit.addEventListener("click", function () {
  closedPopup(popupEdit);
});

closedAdd.addEventListener("click", function () {
  closedPopup(popupAdd);
});

closedPhoto.addEventListener("click", function () {
  closedPopup(popupTypeImage);
});

formElementEdit.addEventListener("submit", handleFormSubmitEdit);
formElementAdd.addEventListener("submit", handleFormSubmitAdd);
addCards();
