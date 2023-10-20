import "./index.css"; 
import { Card } from "../scripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";
import Section from "../scripts/Section.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { UserInfo} from "../scripts/UserInfo.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { classValidation, initialCards, buttonAddProfile, buttonEditProfile, nameInput, descriptionInput, formElementAdd, formElementEdit, buttonPopupAvatar, formElementAvatar, avatar} from "../scripts/utils/constants.js";
import Api from "../scripts/Api.js";
import PopupConfirmation from "../scripts/PopupConfirmation.js";

const api = new Api({
    link: 'https://mesto.nomoreparties.co/v1/cohort-77',
    headers: {
      authorization: '9600f663-0585-482a-86e1-d76605b15ff1',
      'Content-Type': 'application/json'
    }
});

let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
.then(([initialCards, userData]) => {
  console.log(userData.about)

  userInfo.setUserInfo(userData)
  userId = userData._id
  cardList.renderItems(initialCards)
})
.catch((err) => {
  console.log(err)
})

const userInfo = new UserInfo({
  nameSelector: ".profile__author",
  infoSelector: ".profile__description",
  photoSelector: ".profile__avatar"
})

const popupProfile = new PopupWithForm(".popup_edit_button", (data) => {
  popupProfile.buttonStatus(true);
  console.log(data)
    api.setUserInfo(data)
    .then((data) => {
    userInfo.setUserInfo(data)
    popupProfile.close()
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupProfile.buttonStatus(false);
  })
  }
)

const popupAvatar = new PopupWithForm(".popup_avatar", (data) => {
  popupAvatar.buttonStatus(true);
  api.editUserPhoto(data)
  .then((data) => {
    avatar.src = data.avatar
    popupAvatar.close()
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    popupAvatar.buttonStatus(false);
  })
})

const cardValidation = new FormValidator(formElementAdd, classValidation);
cardValidation.enableValidation()
const profileValidation = new FormValidator(formElementEdit, classValidation);
profileValidation.enableValidation();
const avatarValidation = new FormValidator(formElementAvatar, classValidation);
avatarValidation.enableValidation();

const createCard = (data) => {
  const newCard = new Card(data, "#template", userId, (name, link) => {
    popupImage.open(name, link);
    },
    (cardId) => {
      confirmationRemoveCard.open();
      confirmationRemoveCard.removeCardPopup(() => {
        api.removeCard(cardId)
        .then(() => {
          confirmationRemoveCard.close();
          newCard.removeCard()
        })
        .catch((err) => {
          console.log(err);
        })
      })
    },
    (cardId) => {
      api.likeCard(cardId)
      .then((data) => {
        newCard.sumLikes(data);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    (cardId) => {
      api.removeLikeCard(cardId)
      .then((data) => {
        newCard.sumLikes(data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  );
  const cardElement = newCard.generateCard();
  return cardElement
}

const cardList = new Section({
    renderer: (data) => {
      cardList.addItem(createCard(data));
    },
  },
  ".elements"
);

const confirmationRemoveCard = new PopupConfirmation(".popup__remove-card");

const popupCard = new PopupWithForm(".popup_add_button", (formData) => {
  popupCard.buttonStatus(true);
  api.addCard(formData)
  .then((formData) => {
    cardList.addItem(createCard(formData));
    popupCard.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupCard.buttonStatus(false);
  })
});

const popupImage = new PopupWithImage(".popup_type_image");

popupProfile.setEventListeners();
popupAvatar.setEventListeners();
confirmationRemoveCard.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();

function handleProfileButton() {
  popupProfile.open()
  const elementProfile = userInfo.getUserInfo();
  nameInput.value = elementProfile.name;
  descriptionInput.value = elementProfile.info;
  profileValidation.resetValid();
};
buttonEditProfile.addEventListener("click", handleProfileButton);

function handleAvatarButton() {
  popupAvatar.open();
  avatarValidation.resetValid();
}
buttonPopupAvatar.addEventListener("click", handleAvatarButton)

function handleAddCardButton() {
  popupCard.open();
  cardValidation.resetValid();
};
buttonAddProfile.addEventListener("click", handleAddCardButton );

cardValidation.enableValidation();
profileValidation.enableValidation();
avatarValidation.enableValidation();