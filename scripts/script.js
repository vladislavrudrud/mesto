const popup = document.querySelector('.popup');
const edit = document.querySelector('.profile__edit-button');
const closed = document.querySelector('.popup__closed');
const formElement = document.querySelector('.popup__form');
const nameinput = document.getElementById('name');
const descriptioninput = document.getElementById('description');
const author = document.querySelector('.profile__author');
const description = document.querySelector('.profile__description');

popupOpen = () => {
    popup.classList.add('popup__opened');
    nameinput.value = author.textContent;
    descriptioninput.value = description.textContent;
}

popupClosed = () => {
    popup.classList.remove('popup__opened');
}

handleFormSubmit = (evt) => {
    evt.preventDefault();
    author.textContent = nameinput.value;
    description.textContent = descriptioninput.value;
    popupClosed();
}

edit.addEventListener('click', popupOpen);
closed.addEventListener('click', popupClosed);
formElement.addEventListener('submit', handleFormSubmit); 

