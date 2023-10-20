import Popup from "./Popup.js";
export default class PopupConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        // this._handleRemove = handleRemove;
        this._buttonRemoveCard = this._popupElement.querySelector(".popup__button_remove")
    }
    removeCardPopup(remove) {
        this._remove = remove;
    }
    setEventListeners() {
        super.setEventListeners();
        this._buttonRemoveCard.addEventListener("click", (evt) => {
            evt.preventDefault();
            this._remove();
        })
    }
}