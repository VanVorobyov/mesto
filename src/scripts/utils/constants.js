export const validationOptions = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',

  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

export const popupElementsCommon = {
  popups: document.querySelectorAll('.popup'),
  buttonsClose: document.querySelectorAll('.popup__close-button'),
  cards: document.querySelector('.cards'),
};

export const popupElementsUser = {
  popupUserInfo: '.popup_type_edit',
  popupFormUser: document.forms['user-form'],
  inputUserName: document.querySelector('.popup_type_edit .popup__input_user-info_username'),
  inputUserAbout: document.querySelector('.popup_type_edit .popup__input_user-info_about'),
  usernameSelector: '.profile__user-title',
  userAboutSelector: '.profile__user-subtitle',
  userAvatarSelector: '.profile__image',
  buttonEditProfile: document.querySelector('.profile__button-edit'),
  buttonSaveUserInfo: document.querySelector('.popup_type_edit .popup__button_edit-user-info'),
  userAvatar: '.popup_avatar',
  buttonAvatar: document.querySelector('.profile__button-avatar'),
};

export const popupElementsAddCard = {
  popupAddCard: '.popup_type_add-card',
  popupFormCard: document.forms['card-form'],
  inputCardTitle: document.querySelector('.popup_type_add-card .popup__input_card_title'),
  inputCardImage: document.querySelector('.popup_type_add-card .popup__input_card_image'),
  buttonAddCard: document.querySelector('.profile__button-add'),
  buttonSaveCard: document.querySelector('.popup_type_add-card .popup__button_add-image'),
};

export const popupElementsFullImage = {
  popupOpenImageCard: '.popup_type_opened-image',
  fullImage: '.popup__full-image',
  fullImageCaption: '.popup__full-image-caption',
};

export const popupElementsConfirmDelete = {
  popupConfirmDelete: '.popup_confirm-delete',
  buttonConfirmDelete: '.popup__button_confirm-delete',
};

export const cardConfig = {
  cardTemplate: '#card-template',
  cardElementSelector: '.card',
  imageSelector: '.card__image',
  counterSelector: '.card__counter',
  titleSelector: '.card__title',
  buttonLikeSelector: '.card__button',
  buttonDeleteSelector: '.card__delete-button',
  buttonToggleClass: 'card__button_icon-fill',
  buttonDeleteToggleClass: 'card__delete-button_hidden',
};
