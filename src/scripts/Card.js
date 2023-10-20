export class Card {
    constructor(data, templateSelector, userId, handleCardClick, removeIcon, setLike, removeLike) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick; 
        this._userId = userId;
        this._elementId = data._id;
        this._ownerId = data.owner._id;
        this._removeIcon = removeIcon;
        this._setLike = setLike;
        this._removeLike = removeLike

    }
    _getTemplate() {
        this._card = document
        .querySelector(this._templateSelector)
        .content.querySelector(".element")
        .cloneNode(true);

        return this._card
    }
    removeCard () {
        this._cardElement.remove()
        this._cardElement = null
    }
    _setEventListeners() {
        this._elementPhoto.addEventListener("click", () => {
            this._handleCardClick(this._name, this._link)
      })
      this._elementClosed.addEventListener("click", () => {
            this._removeIcon(this._elementId)
      })
      this._elementButton.addEventListener("click", () => {
        if(this._elementButton.classList.contains("element__button-active")) {
            this._removeLike(this._elementId)
        } else {
            this._setLike(this._elementId)
        }
      })
    }
    generateCard = () => {
        this._cardElement = this._getTemplate();
        this._elementPhoto = this._cardElement.querySelector(".element__photo");
        this._elementClosed = this._cardElement.querySelector(".element__closed");
        this._elementTitle = this._cardElement.querySelector(".element__title");
        this._elementButton = this._cardElement.querySelector(".element__button");
        this._elementSumLikes = this._cardElement.querySelector(".element__like_sum");
      
        this._elementPhoto.alt = this._name;
        this._elementPhoto.src = this._link
        this._elementTitle.textContent = this._name;
    
        this._removeElementClosed();
        this._checkLikeCard();
        this._elementSumLikes.textContent = this._likes.length;
        this._setEventListeners();
      
        return this._cardElement;
      };

      _checkLikeCard() {
        if(this._likes.some((user) => {
            return this._userId === user._id;
        })) {
            this._elementButton.classList.add("element__button-active");
        }
      }

      sumLikes(data) {
        this._likes = data.likes;
        this._elementSumLikes.textContent = this._likes.length;
        this._elementButton.classList.toggle("element__button-active")
      }

    _removeElementClosed () {
        if( this._userId !== this._ownerId) {
            this._elementClosed.remove()
        }
    }
}
