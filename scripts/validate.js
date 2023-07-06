function showError(inputElement, errorElement) {
    inputElement.classList.add("popup__input_error_invalid");
    errorElement.textContent = inputElement.validationMessage;
  }
  
  function hideError(inputElement, errorElement) {
    inputElement.classList.remove("popup__input_error_invalid");
    errorElement.textContent = inputElement.validationMessage;
  }
  
  function chekInputValidity(inputElement, formElement) {
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    if (!isInputValid) {
      showError(inputElement, errorElement)
    } else {
      hideError(inputElement, errorElement)
    }
  }
  
  function disabledButton(buttonElement) {
    buttonElement.disabled = "disabled";
    buttonElement.classList.add("popup__add_invalid");
  }
  
  function enableButton(buttonElement) {
    buttonElement.disabled = false;
    buttonElement.classList.remove("popup__add_invalid");
  
  }
  
  function toggleButtonState(buttonElement, isActive) {
    if (!isActive) {
      disabledButton(buttonElement);
    } else {
      enableButton(buttonElement);
    }
  }
  
  function setEventListener(formElement) {
    const inputList = formElement.querySelectorAll(".popup__input");
    const submitButtonElement = formElement.querySelector(".popup__add");
  
    toggleButtonState(submitButtonElement, formElement.checkValidity());
    [...inputList].forEach(function(inputElement) {
      inputElement.addEventListener('input', function() {
        toggleButtonState(submitButtonElement, formElement.checkValidity());
        chekInputValidity(inputElement, formElement);
      });
    });
  
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (!formElement.checkValidity()) return;
      console.log("Форма отправлена!");
    });
  }
  
  function enableValidation() {
    const formsList = document.querySelectorAll(".popup__form");
  
    [...formsList].forEach(function(formElement) {
      setEventListener(formElement);
    });
  };
  enableValidation();