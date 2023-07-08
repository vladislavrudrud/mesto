const classValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__add',
    inactiveButtonClass: 'popup__add_invalid',
    inputErrorClass: 'popup__input_error_invalid',
  }; 

function showError(inputElement, errorElement, classValidation) {
    inputElement.classList.add(classValidation.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }
  
  function hideError(inputElement, errorElement, classValidation) {
    inputElement.classList.remove(classValidation.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }
  
  function chekInputValidity(inputElement, formElement, classValidation) {
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    if (!isInputValid) {
      showError(inputElement, errorElement, classValidation)
    } else {
      hideError(inputElement, errorElement, classValidation)
    }
  }
  
  function disabledButton(buttonElement, classValidation) {
    buttonElement.disabled = "disabled";
    buttonElement.classList.add(classValidation.inactiveButtonClass);
  }
  
  function enableButton(buttonElement, classValidation) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(classValidation.inactiveButtonClass);
  }
  
  function toggleButtonState(buttonElement, isActive) {
    if (!isActive) {
      disabledButton(buttonElement, classValidation);
    } else {
      enableButton(buttonElement, classValidation);
    }
  }
  
  function setEventListener(formElement, classValidation) {
    const inputList = formElement.querySelectorAll(classValidation.inputSelector);
    const submitButtonElement = formElement.querySelector(classValidation.submitButtonSelector);
  
    toggleButtonState(submitButtonElement, formElement.checkValidity());
    [...inputList].forEach(function(inputElement) {
      inputElement.addEventListener('input', function() {
        toggleButtonState(submitButtonElement, formElement.checkValidity());
        chekInputValidity(inputElement, formElement, classValidation);
      });
    });
  
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (!formElement.checkValidity()) return;
      console.log("Форма отправлена!");
    });
  }
  
  function enableValidation(classValidation) {
    const formsList = document.querySelectorAll(classValidation.formSelector);
  
    [...formsList].forEach(function(formElement) {
      setEventListener(formElement, classValidation);
    });
  };
  enableValidation(classValidation);