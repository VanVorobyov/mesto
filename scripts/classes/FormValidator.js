export default class FormValidator {
  constructor(options, formElement) {
    this._inputSelector = options.inputSelector;
    this._submitButtonSelector = options.submitButtonSelector;

    this._inactiveButtonClass = options.inactiveButtonClass;
    this._inputErrorClass = options.inputErrorClass;
    this._errorClass = options.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
    this._buttonElement = this._formElement.querySelector(`.popup__button`);
  }

  _showInputError = (input) => {
    input.classList.add(this._inputErrorClass);
    const errorElement = this._formElement.querySelector(`.popup__error_${input.id}`);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (input) => {
    input.classList.remove(this._inputErrorClass);
    const errorElement = this._formElement.querySelector(`.popup__error_${input.id}`);
    errorElement.classList.remove(this._errorClass);
  };

  _isValid = (input) => {
    return input.validity.valid;
  };

  // Функция проверки инпута на ошибку
  _isInputValid = (input) => {
    if (this._isValid(input)) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  };

  _enableButton = () => {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  };

  _disableButton = () => {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  };

  // Функция переключателя кнопки
  _toggleButtonState = () => {
    if (this._inputList.every((input) => this._isValid(input))) {
      this._enableButton();
    } else {
      this._disableButton();
    }
  };

  // Распределяет проверку ошибки на каждый инпут элемент
  _setEventListeners = () => {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._isInputValid(input);
        this._toggleButtonState();
      });
    });
  };

  resetValidation() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners();
  }
}
