import "./index.css"; 
import { Card } from "../scripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";
import Section from "../scripts/Section.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { UserInfo} from "../scripts/UserInfo.js";
import { PopupWithForm } from "../scripts/PopupWithForm";
import { classValidation, initialCards, buttonAddProfile, buttonEditProfile, nameInput, descriptionInput, cardListSelector, formElementAdd, formElementEdit} from "../scripts/utils/constants.js";

const cardValidation = new FormValidator(formElementAdd, classValidation);
cardValidation.enableValidation()
const profileValidation = new FormValidator(formElementEdit, classValidation);
profileValidation.enableValidation();
const popupCard = new PopupWithForm(".popup_add_button", handleFormSubmitAdd);
const popupProfile = new PopupWithForm(".popup_edit_button", handleFormSubmitEdit)
const popupImage = new PopupWithImage(".popup_type_image");
const userInfo = new UserInfo({
  nameSelector: ".profile__author",
  infoSelector: ".profile__description",
})
const createCard = (data) => {
  const newCard = new Card(data, handleCardClick, "#template");
  const cardElement = newCard.createCard();
  return cardElement
}



function handleProfileButton() {
  popupProfile.open()
  const elementProfile = userInfo.getUserInfo();
  nameInput.value = elementProfile.name;
  descriptionInput.value = elementProfile.info;
  profileValidation.resetValid();
};

function handleAddCardButton() {
  popupCard.open();
  cardValidation.resetValid();
};

function handleFormSubmitEdit(data) {
  userInfo.setUserInfo(data);
};

function handleFormSubmitAdd(data) {
  const cardElement = createCard(data);
  cardList.addItem(cardElement);
};

function handleCardClick(link, name) {
  popupImage.open(name, link);
}



const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardList.addItem(cardElement);
    },
  },
  ".elements"
);

cardList.renderItems();

buttonAddProfile.addEventListener("click", handleAddCardButton );
buttonEditProfile.addEventListener("click", handleProfileButton);
cardValidation.enableValidation();
profileValidation.enableValidation();
popupCard.setEventListeners();
popupProfile.setEventListeners();
popupImage.setEventListeners();
