import Popup from "./Popup.js";
export class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._formPopup = this._popupElement.querySelector(".popup__form");
        this._inputsPopup = Array.from(this._formPopup.querySelectorAll(".popup__input"));


    }
    _getInputValues() {
        const formPopupValue = {};
        this._inputsPopup.forEach((input) => {
            formPopupValue[input.name] = input.value;
        });
        return formPopupValue;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formPopup.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
            this.close();
        })
    }

    close() {
        super.close();
        this._formPopup.reset();
    }


}
