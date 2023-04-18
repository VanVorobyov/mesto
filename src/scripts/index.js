// Импортирование классов и констант
import '../pages/index.css';
import * as constants from './utils/constants.js';
import Api from '../scripts/classes/Api.js';
import Card from '../scripts/classes/Card.js';
import FormValidator from '../scripts/classes/FormValidator.js';
import { initialCards } from './utils/cards.js';
import PopupWithForm from '../scripts/classes/PopupWithForm.js';
import PopupWithImage from '../scripts/classes/PopupWithImage.js';
import Section from '../scripts/classes/Section.js';
import Popup from '../scripts/classes/Popup.js';
import UserInfo from '../scripts/classes/UserInfo.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: 'e2a854ae-97cb-44db-b5bb-1f03cec72045',
    'Content-Type': 'application/json',
  },
});

// Валидация
const formValidators = {};
const enableValidation = config => {
  const formList = Array.from(document.querySelectorAll(constants.validationOptions.formSelector));
  formList.forEach(formElement => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

// попап отрытия изображения
const popupWithImage = new PopupWithImage('.popup_type_opened-image');
const openPopupWithImage = item => popupWithImage.open(item);
popupWithImage.setEventListeners();

const createCard = cardData => {
  const card = new Card(cardData, constants.cardConfig, openPopupWithImage);
  const cardElement = card.generateCard();
  return cardElement;
};

// Рендер всех карточек
const cardList = new Section(
  {
    items: initialCards,
    renderer: item => {
      cardList.addItem(createCard(item));
    },
  },
  constants.popupElementsCommon.cards
);

cardList.renderItems();

// Попап пользователя
const userInfo = new UserInfo({
  userNameSelector: constants.popupElementsUser.usernameSelector,
  userAboutSelector: constants.popupElementsUser.userAboutSelector,
});

api
  .getUserInfo()
  .then(data => {
    userInfo.setUserInfo(data.name, data.about);
    userInfo.setUserAvatar(data.avatar);
    userInfo.getUserId(data._id);
  })
  .catch(err => {
    console.log(err);
  });

// Открывает попап редактирования профиля
const openPopupEditProfile = ({ name, about }) => {
  popupEditUserInfo.setInputValues({ name, about });
  formValidators['user-form'].resetValidation();
  popupEditUserInfo.open();
};
// Обрабатывает информация профиля
const popupEditUserInfo = new PopupWithForm(constants.popupElementsUser.popupUserInfo, data => {
  userInfo.setUserInfo(data);
  popupEditUserInfo.close();
});
popupEditUserInfo.setEventListeners();

constants.popupElementsUser.buttonEditProfile.addEventListener('click', () => openPopupEditProfile(userInfo.getUserInfo()));

// Попап добавления карточки
const popupAddImage = new PopupWithForm(constants.popupElementsAddCard.popupAddCard, cardData => {
  cardList.addItem(createCard(cardData));
});
popupAddImage.setEventListeners();

constants.popupElementsAddCard.buttonAddCard.addEventListener('click', () => {
  formValidators['card-form'].resetValidation();
  popupAddImage.open();
});

enableValidation(constants.validationOptions);
[];
