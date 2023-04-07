// Импортирование классов и констант
import '../pages/index.css';
import Card from '../scripts/classes/Card.js';
import FormValidator from '../scripts/classes/FormValidator.js';
import {
  validationOptions,
  popupElementsCommon,
  popupElementsUser,
  popupElementsAddCard,
  popupElementsFullImage,
  cardConfig,
} from './utils/constants.js';
import { initialCards } from './utils/cards.js';
import Section from '../scripts/classes/Section.js';
import Popup from '../scripts/classes/Popup.js';
import PopupWithForm from '../scripts/classes/PopupWithForm.js';
import PopupWithImage from '../scripts/classes/PopupWithImage.js';
import UserInfo from '../scripts/classes/UserInfo.js';

// Валидация
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

const popupWithImage = new PopupWithImage('.popup_type_opened-image');
const openPopupWithImage = (item) => popupWithImage.open(item);
popupWithImage.setEventListeners();

const createCard = (cardData) => {
  const card = new Card(cardData, cardConfig, openPopupWithImage);
  const cardElement = card.generateCard();
  return cardElement;
};

// Рендер всех карточек
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  popupElementsCommon.cards
);

cardList.renderItems();

// Попап пользователя
const userInfo = new UserInfo({
  userNameSelector: popupElementsUser.usernameSelector,
  userAboutSelector: popupElementsUser.userAboutSelector,
});
// Открывает попап редактирования профиля
const openPopupEditProfile = ({ name, about }) => {
  popupEditUserInfo.setInputValues({ name, about });
  formValidators['user-form'].resetValidation();
  popupEditUserInfo.open();
};
// Обрабатывает информация профиля
const popupEditUserInfo = new PopupWithForm(popupElementsUser.popupUserInfo, (data) => {
  userInfo.setUserInfo(data);
  popupEditUserInfo.close();
});
popupEditUserInfo.setEventListeners();

popupElementsUser.buttonEditProfile.addEventListener('click', () => openPopupEditProfile(userInfo.getUserInfo()));

// Попап добавления карточки
const popupAddImage = new PopupWithForm(popupElementsAddCard.popupAddCard, (cardData) => {
  cardList.addItem(createCard(cardData));
});
popupAddImage.setEventListeners();

popupElementsAddCard.buttonAddCard.addEventListener('click', () => {
  formValidators['card-form'].resetValidation();
  popupAddImage.open();
});

enableValidation(validationOptions);
[];
