const options = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',

  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

// Элементы
const popups = document.querySelectorAll('.popup');
const buttonsClose = document.querySelectorAll('.popup__close-button');
const cards = document.querySelector('.cards'); // Родитель карточек куда будем добавлять карточки

const popupFormUser = document.querySelector('.popup__form_user');
const popupFormCard = document.querySelector('.popup__form_add-card');
// ------------------Попап редактирования пользователя
const popupUserInfo = document.querySelector('.popup_type_edit');
const inputUserName = popupUserInfo.querySelector('.popup__input_user-info_username'); // инпут для ввода имени пользователя
const inputUserAbout = popupUserInfo.querySelector('.popup__input_user-info_about'); // инпут для ввода описания пользователя
const username = document.querySelector('.profile__user-title'); // Имя пользователя
const userAbout = document.querySelector('.profile__user-subtitle'); // Описание пользователя
// Кнопки
const buttonEditProfile = document.querySelector('.profile__button-edit'); // Кнопка "Редактирование профиля пользователя"
const buttonSaveUserInfo = popupUserInfo.querySelector('.popup__button_edit-user-info'); // Кнопка "Сохранение профиля пользователя"
// -----------------Попап добавления карточек
const popupAddCard = document.querySelector('.popup_type_add-card');
const inputCardTitle = popupAddCard.querySelector('.popup__input_card_title'); //инпут для заголовка карточки
const inputCardImage = popupAddCard.querySelector('.popup__input_card_image'); //инпут для загрузки изображения карточки
// Кнопки:
const buttonAddCard = document.querySelector('.profile__button-add'); // Добавление фотокарточек
const buttonSaveCard = popupAddCard.querySelector('.popup__button_add-image'); // Сохранение фотокарточек
// -----------------Попап открытия изображения карточки
const popupOpenImageCard = document.querySelector('.popup_type_opened-image');
const fullImage = document.querySelector('.popup__full-image'); // Полное изображение карточки
const fullImageCaption = document.querySelector('.popup__full-image-caption'); //  Описание полного изображения карточки
