// Показывает ошибку
const showInputError = (form, element, errorMessage, options) => {
  element.classList.add(options.errorClass);
  const errorElement = form.querySelector(`.popup__error_${element.id}`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(options.errorClass);
};
// Скрывает ошибку
const hideInputError = (form, element, options) => {
  element.classList.remove(options.inputErrorClass);
  const errorElement = form.querySelector(`.popup__error_${element.id}`);
  errorElement.classList.remove(options.errorClass);
};

const isValid = (element) => {
  return element.validity.valid;
};

// Функция проверки инпута на ошибку
const isInputValid = (form, element, options) => {
  if (isValid(element)) {
    hideInputError(form, element, options);
  } else {
    showInputError(form, element, element.validationMessage, options);
  }
};

const enableButton = (buttonElement, options) => {
  buttonElement.classList.remove(options.inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
};

const disableButton = (buttonElement, options) => {
  buttonElement.classList.add(options.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
};
// Функция переключателя кнопки
const toggleButtonState = (form, buttonElement, options) => {
  const inputList = Array.from(form.querySelectorAll(options.inputSelector));
  if (inputList.every((input) => isValid(input))) {
    enableButton(buttonElement, options);
  } else {
    disableButton(buttonElement, options);
  }
};

// Распределяет проверку ошибки на каждый инпут элемент
const setEventListeners = (form, options) => {
  const inputList = Array.from(form.querySelectorAll(options.inputSelector));
  const buttonElement = form.querySelector(options.submitButtonSelector);
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      isInputValid(form, input, options);
      toggleButtonState(form, buttonElement, options);
    });
  });
};

const enableValidation = (options) => {
  const formList = Array.from(document.querySelectorAll(options.formSelector));
  formList.forEach((form) => {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(form, options);
  });
};

const options = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',

  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

enableValidation(options);
