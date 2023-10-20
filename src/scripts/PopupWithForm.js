import Popup from "./Popup.js";
export class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._formPopup = this._popupElement.querySelector(".popup__form");
        this._inputsPopup = Array.from(this._formPopup.querySelectorAll(".popup__input"));
        this._submitPopup = this._formPopup.querySelector(".popup__add");
        this._submitText = this._submitPopup.textContent;
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
        })
    }

    close() {
        super.close();
        this._formPopup.reset();
    }

    setButtonStatus(status) {
        if (status) {
            this._submitPopup.textContent = 'Сохранение...'
        } else {
            this._submitPopup.textContent = this._submitText
        }
    }
}
