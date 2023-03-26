const validationOptions = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',

  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const popupElementsCommon = {
  popups: document.querySelectorAll('.popup'),
  buttonsClose: document.querySelectorAll('.popup__close-button'),
  cards: document.querySelector('.cards'),
};

const popupElementsUser = {
  popupUserInfo: document.querySelector('.popup_type_edit'),
  popupFormUser: document.querySelector('.popup__form_user'),
  inputUserName: document.querySelector('.popup_type_edit .popup__input_user-info_username'),
  inputUserAbout: document.querySelector('.popup_type_edit .popup__input_user-info_about'),
  username: document.querySelector('.profile__user-title'),
  userAbout: document.querySelector('.profile__user-subtitle'),
  buttonEditProfile: document.querySelector('.profile__button-edit'),
  buttonSaveUserInfo: document.querySelector('.popup_type_edit .popup__button_edit-user-info'),
};

const popupElementsAddCard = {
  popupAddCard: document.querySelector('.popup_type_add-card'),
  popupFormCard: document.querySelector('.popup__form_add-card'),
  inputCardTitle: document.querySelector('.popup_type_add-card .popup__input_card_title'),
  inputCardImage: document.querySelector('.popup_type_add-card .popup__input_card_image'),
  buttonAddCard: document.querySelector('.profile__button-add'),
  buttonSaveCard: document.querySelector('.popup_type_add-card .popup__button_add-image'),
};

const popupElementsFullImage = {
  popupOpenImageCard: document.querySelector('.popup_type_opened-image'),
  fullImage: document.querySelector('.popup__full-image'),
  fullImageCaption: document.querySelector('.popup__full-image-caption'),
};

const cardConfig = {
  cardTemplate: '#card-template',
  cardElementSelector: '.card',
  imageSelector: '.card__image',
  titleSelector: '.card__title',
  buttonLikeSelector: '.card__button',
  buttonDeleteSelector: '.card__delete-button',
  buttonToggleClass: 'card__button_icon-fill',
};

export { validationOptions, popupElementsCommon, popupElementsUser, popupElementsAddCard, popupElementsFullImage, cardConfig };
