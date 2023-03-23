// Импортирование классов и констант
import Card from './classes/Card.js';
import FormValidator from './classes/FormValidator.js';
import { validationOptions, popupElementsCommon, popupElementsUser, popupElementsAddCard, popupElementsFullImage } from './constants.js';
import { initialCards } from './cards.js';

const formValidators = {};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(validationOptions.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

// Функция закрытия попапа при нажатии на escape
const handleEscClose = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

// Универсальные функции открытия и закрытия попапов
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClose);
  // closePopupOverlay(popup);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscClose);
};

// Добавление слушателей на кнопки закрытия попапа
popupElementsCommon.popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  });
});
// Функции обработки попапов пользователя и карточек
const openUserInfoPopup = () => {
  popupElementsUser.inputUserName.value = popupElementsUser.username.textContent;
  popupElementsUser.inputUserAbout.value = popupElementsUser.userAbout.textContent;
  formValidators['user-form'].resetValidation();
  openPopup(popupElementsUser.popupUserInfo);
};

const editUserInfo = (evt) => {
  evt.preventDefault();
  popupElementsUser.username.textContent = popupElementsUser.inputUserName.value;
  popupElementsUser.userAbout.textContent = popupElementsUser.inputUserAbout.value;
  closePopup(popupElementsUser.popupUserInfo);
};

const openAddCardPopup = () => {
  popupElementsAddCard.popupFormCard.reset();
  formValidators['card-form'].resetValidation();
  openPopup(popupElementsAddCard.popupAddCard);
};

const openFullImage = (cardData) => {
  popupElementsFullImage.fullImage.src = cardData.link;
  popupElementsFullImage.fullImageCaption.textContent = cardData.name;
  popupElementsFullImage.fullImageCaption.alt = cardData.name;
  openPopup(popupElementsFullImage.popupOpenImageCard);
};

const createCard = (cardData) => {
  const card = new Card(cardData, openFullImage);
  const cardElement = card.generateCard();
  return cardElement;
};

const handleAddCard = (evt) => {
  evt.preventDefault();
  const name = popupElementsAddCard.inputCardTitle.value;
  const link = popupElementsAddCard.inputCardImage.value;
  const cardElement = createCard({ name, link });
  popupElementsCommon.cards.prepend(cardElement);
  evt.target.reset();
  closePopup(popupElementsAddCard.popupAddCard);
};

const renderCards = () => {
  initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData);
    popupElementsCommon.cards.prepend(cardElement);
  });
};

// Вызов функций при загрузке страницы и добавление слушателей на кнопки
renderCards();
enableValidation(validationOptions);
popupElementsUser.buttonEditProfile.addEventListener('click', openUserInfoPopup);
popupElementsAddCard.buttonAddCard.addEventListener('click', openAddCardPopup);
popupElementsUser.popupFormUser.addEventListener('submit', editUserInfo);
popupElementsAddCard.popupFormCard.addEventListener('submit', handleAddCard);
