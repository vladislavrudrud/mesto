const popup = document.querySelector('.popup');
const edit = document.querySelector('.profile__edit-button');
const closed = document.querySelector('.popup__closed');
const formElement = document.querySelector('.popup__form');
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
const author = document.querySelector('.profile__author');
const description = document.querySelector('.profile__description');

const popupOpen = () => {
    popup.classList.add('popup_opened');
    nameInput.value = author.textContent;
    descriptionInput.value = description.textContent;
}

const popupClosed = () => {
    popup.classList.remove('popup_opened');
}

const handleFormSubmit = (evt) => {
    evt.preventDefault();
    author.textContent = nameInput.value;
    description.textContent = descriptionInput.value;
    popupClosed();
}

edit.addEventListener('click', popupOpen);
closed.addEventListener('click', popupClosed);
formElement.addEventListener('submit', handleFormSubmit); 

