export class FormValidator {
    constructor(
    formElement, listSelector
    ) {
        this._formElement = formElement;
        this._listSelector = listSelector;
        this._inputList = Array.from(formElement.querySelectorAll(this._listSelector.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._listSelector.submitButtonSelector);
    }
     _showError = (inputElement, errorMessage) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.add(this._listSelector.inputErrorClass);
        errorElement.textContent = errorMessage;
        console.log(errorElement);
     }
      
     _hideError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.remove(this._listSelector.inputErrorClass);
        errorElement.textContent = '';
      }
     _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
     }
     _checkInputValidity = (inputElement) => {
        if(!inputElement.validity.valid) {
            this._showError(inputElement, inputElement.validationMessage);
        } else {
            this._hasInvalidInput(inputElement)
        }
     }
     _toggleButtonState = () => {
        if(this._hasInvalidInput()) {
            this._buttonElement.setAttribute("disabled", true);
            this._buttonElement.classList.add(this._listSelector.inactiveButtonClass);
        } else {
            this._buttonElement.removeAttribute("disabled");
            this._buttonElement.classList.remove(this._listSelector.inactiveButtonClass);
        }
     }
     _setEventListener = () => {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._toggleButtonState();
                this._checkInputValidity(inputElement)
            })
        })
     }
     resetValid = () => {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideError(inputElement)
        })
     }
     enableValidation = () => {
        this._setEventListener();
     }
}


