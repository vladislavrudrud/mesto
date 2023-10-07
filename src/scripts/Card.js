export class Card {
    constructor(
        data, handleClickOpen,
        templateSelector
    ) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleClickOpen = handleClickOpen;
    }
    _getTemplate() {
        return document
        .querySelector(this._templateSelector)
        .content.querySelector(".element")
        .cloneNode(true);
    }
    createCard = () => {
        this._cardElement = this._getTemplate();
        this._elementPhoto = this._cardElement.querySelector(".element__photo");
        this._elementClosed = this._cardElement.querySelector(".element__closed");
        this._elementTitle = this._cardElement.querySelector(".element__title");
        this._elementButton = this._cardElement.querySelector(".element__button");
      
        this._elementPhoto.alt = this._name;
        this._elementTitle.textContent = this._name;
        this._elementPhoto.src = this._link;
      
        this._elementButton.addEventListener("click", () => {
            this._elementButton.classList.toggle("element__button-active");
        });
      
        this._elementClosed.addEventListener("click", () => {
            this._cardElement.remove();
        });
      
        this._elementPhoto.addEventListener("click", () => {
            this._handleClickOpen(this._link, this._name )
        });
        return this._cardElement;
      };
}
