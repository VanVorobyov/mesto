// Импортирование классов и констант
import '../pages/index.css';
import * as constants from '../scripts/utils/constants.js';
import Api from '../scripts/classes/Api.js';
import Card from '../scripts/classes/Card.js';
import FormValidator from '../scripts/classes/FormValidator.js';
import PopupWithForm from '../scripts/classes/PopupWithForm.js';
import PopupWithImage from '../scripts/classes/PopupWithImage.js';
import PopupWithConfirm from '../scripts/classes/PopupWithConfirm.js';

import Section from '../scripts/classes/Section.js';
import Popup from '../scripts/classes/Popup.js';
import UserInfo from '../scripts/classes/UserInfo.js';

// Валидация
const formValidators = {};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(constants.validationOptions.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: 'e2a854ae-97cb-44db-b5bb-1f03cec72045',
    'Content-Type': 'application/json',
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    cardList.renderItems(cards);
  })
  .catch((err) => console.log(err));

function сreateCard(data) {
  const card = new Card(data, constants.cardConfig, {
    userId: userInfo.getUserId(),
    handleCardClick: () => popupWithImage.open(data),
    handleDeleteClick: () => deleteConfirmPopup.open(card),
    handleLikeClick: () => {
      if (card.isLiked()) {
        api
          .removeLike(card)
          .then((res) => card.updateLikes(res.likes))
          .catch((err) => console.log(err));
      } else {
        api
          .putLike(card)
          .then((res) => card.updateLikes(res.likes))
          .catch((err) => console.log(err));
      }
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section(
  {
    renderer: (item) => {
      cardList.addItem(сreateCard(item));
    },
  },
  constants.popupElementsCommon.cards
);

// ------------------------------ПОПАПЫ--------------------------------

// Попап создания карточки
const popupAddImage = new PopupWithForm(constants.popupElementsAddCard.popupAddCard, {
  handleSubmitForm: (inputValuesList) => {
    popupAddImage.renderLoading(true);
    api
      .postCard({ name: inputValuesList.name, link: inputValuesList.link })
      .then((res) => {
        cardList.addItem(сreateCard(res));
        popupAddImage.close();
      })
      .catch((err) => console.log(err))
      .finally(() => popupAddImage.renderLoading(false));
  },
});

popupAddImage.setEventListeners();

function openPopupAddImage() {
  formValidators['card-form'].resetValidation();
  popupAddImage.open();
}

// Попап отрытия изображения
const popupWithImage = new PopupWithImage('.popup_type_opened-image');
popupWithImage.setEventListeners();

// Попап подтвердждения удаления карточки
const deleteConfirmPopup = new PopupWithConfirm(constants.popupElementsConfirmDelete.popupConfirmDelete, (card) => {
  deleteConfirmPopup.renderLoading(true);
  api
    .deleteCard(card)
    .then(() => {
      card.deleteCard();
      deleteConfirmPopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => deleteConfirmPopup.renderLoading(false));
});
deleteConfirmPopup.setEventListeners();

// Попап пользователя
const userInfo = new UserInfo({
  userNameSelector: constants.popupElementsUser.usernameSelector,
  userAboutSelector: constants.popupElementsUser.userAboutSelector,
  userAvatarSelector: constants.popupElementsUser.userAvatarSelector,
});
//-----------------------------------------------------------------

// function handleSubmit(request, popupInstance, loadingText = 'Сохранение...') {
//   popupInstance.renderLoading(true, loadingText);
//   request()
//     .then(() => {
//       popupInstance.close();
//     })
//     .catch((err) => {
//       console.error(`Ошибка: ${err}`);
//     })
//     .finally(() => {
//       popupInstance.renderLoading(false);
//     });
// }
// function handleProfileFormSubmit(inputValues) {
//   function makeRequest() {
//     return api.editProfile(inputValues).then((userData) => {
//       userInfo.setUserInfo(userData);
//     });
//   }
//   handleSubmit(makeRequest, profilePopup);
// }

//----------------------------------------------------------------
const popupEditUserInfo = new PopupWithForm(constants.popupElementsUser.popupUserInfo, {
  handleSubmitForm: (inputValuesList) => {
    popupEditUserInfo.renderLoading(true);
    api
      .setUserInfo(inputValuesList)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupEditUserInfo.close();
      })
      .catch((err) => console.log(err))
      .finally(() => popupEditUserInfo.renderLoading(false));
  },
});
popupEditUserInfo.setEventListeners();
// Открывает попап редактирования профиля
const openPopupEditProfile = (data) => {
  popupEditUserInfo.setInputValues(data);
  formValidators['user-form'].resetValidation();
  popupEditUserInfo.open();
};

//Попап Аватара
const avatarPopup = new PopupWithForm(constants.popupElementsUser.userAvatar, {
  handleSubmitForm: (inputValuesList) => {
    avatarPopup.renderLoading(true);
    api
      .changeAvatar(inputValuesList.avatar)
      .then((res) => {
        userInfo.setUserInfo(res);
        avatarPopup.close();
      })
      .catch((err) => console.log(err))
      .finally(() => avatarPopup.renderLoading(false));
  },
});
avatarPopup.setEventListeners();

function openAvatarPopup() {
  formValidators['avatar-form'].resetValidation();
  avatarPopup.open();
}

constants.popupElementsUser.buttonEditProfile.addEventListener('click', () => openPopupEditProfile(userInfo.getUserInfo()));
constants.popupElementsAddCard.buttonAddCard.addEventListener('click', () => openPopupAddImage());
constants.popupElementsUser.buttonAvatar.addEventListener('click', () => openAvatarPopup());
// Попап добавления карточки

enableValidation(constants.validationOptions);
