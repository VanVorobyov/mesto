// !------------ПЕРЕМЕННЫЕ--------------
// Элементы
const cards = document.querySelector('.cards'); // Родитель карточек куда будем добавлять карточки

// ------------------Попап редактирования пользователя
const popupUserInfo = document.querySelector('.popup_user-unfo');
const inputUserName = popupUserInfo.querySelector('.popup__input_user-info_username'); // инпут для ввода имени пользователя
const inputUserAbout = popupUserInfo.querySelector('.popup__input_user-info_about'); // инпут для ввода описания пользователя
let username = document.querySelector('.profile__user-title'); // Имя пользователя
let userAbout = document.querySelector('.profile__user-subtitle'); // Описание пользователя
// Кнопки
const editUserInfoButton = document.querySelector('.profile__button-edit'); // Кнопка "Редактирование профиля пользователя"
const saveUserInfoButton = popupUserInfo.querySelector('.popup__button_edit-user-info'); // Кнопка "Сохранение профиля пользователя"
const closeUserInfoButton = document.querySelector('.popup__close-button_user'); // Кнопка "Закрытие попапа" попапа редактирования пользователя

// -----------------Попап добавления карточек
const popupAddCard = document.querySelector('.popup_add-card');
// const addCardForm = popupAddCard.querySelector('.popup__form_add-card'); //форма для заголовка карточки
const inputCardTitle = popupAddCard.querySelector('.popup__input_card_title'); //инпут для заголовка карточки
const inputCardImage = popupAddCard.querySelector('.popup__input_card_image'); //инпут для загрузки изображения карточки
// Кнопки:
const addCardButton = document.querySelector('.profile__button-add'); // Добавление фотокарточек
const saveCardButton = popupAddCard.querySelector('.popup__button_add-image'); // Сохранение фотокарточек
const closeAddCardButton = document.querySelector('.popup__close-button_card'); // Кнопка "Закрытие попапа" попапа добавления карточки

// -----------------Попап открытия изображения карточки
const popupOpenImageCard = document.querySelector('.popup_image-open');
const fullImage = document.querySelector('.popup__full-image'); // Полное изображение карточки
const fullImageCaption = document.querySelector('.popup__full-image-caption'); //  Описание полного изображения карточки
// Кнопки:
const closeFullImageButton = document.querySelector('.popup__close-button_full-image'); // Закрыть полное изображение карточки

// !------------ФУНКЦИИ--------------

//ПОЛЬЗОВАТЕЛЬ
// Открываем попап редактирования пользователя
const openUserInfoPopup = () => {
  inputUserName.value = username.textContent;
  inputUserAbout.value = userAbout.textContent;
  popupUserInfo.classList.add('popup_opened');
};
// Закрываем попап редактирования пользователя
const closeUserInfoPopup = () => {
  popupUserInfo.classList.remove('popup_opened');
};
// Редактирование пользователя
const editUserInfo = (evt) => {
  evt.preventDefault();
  username.textContent = inputUserName.value;
  userAbout.textContent = inputUserAbout.value;
  closeUserInfoPopup();
};

//КАРТОЧКИ
// Открываем попап добавления фотокарточек
const openAddCardPopup = () => {
  popupAddCard.classList.add('popup_opened');
};
// Закрываем попап добавления фотокарточек
const closeAddCardPopup = () => {
  popupAddCard.classList.remove('popup_opened');
};
// Открываем попап полного изображения
const openFullImage = (evt) => {
  evt.preventDefault();
  fullImage.src = evt.target.src;
  fullImageCaption.textContent = evt.target.alt;
  fullImageCaption.alt = evt.target.alt;
  popupOpenImageCard.classList.add('popup_opened');
};
// Закрываем попап полного изображения
const closeFullImage = () => {
  popupOpenImageCard.classList.remove('popup_opened');
};
// Лайки
const likeCardElement = (evt) => {
  evt.preventDefault();
  evt.target.classList.toggle('card__button_icon-empty');
  evt.target.classList.toggle('card__button_icon-fill');
};
//Удаление карточки
const deleteCardElement = (evt) => {
  evt.preventDefault();
  evt.target.closest('.card').remove();
};
// Создает новый элемент карточки на основе шаблона
const createCardElement = (name, link) => {
  const cardTemplate = document.querySelector('#card-template').content; // template карточка
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true); // Клонирование карточки
  const cardElementTitle = cardElement.querySelector('.card__title');
  const cardElementImage = cardElement.querySelector('.card__image');
  const likeCardElementButton = cardElement.querySelector('.card__button');
  const deleteCardElementButton = cardElement.querySelector('.card__delete-button_js');
  cardElementTitle.textContent = name;
  cardElementImage.src = link;
  cardElementImage.alt = name;
  cardElementImage.removeAttribute('href');
  likeCardElementButton.addEventListener('click', likeCardElement);
  deleteCardElementButton.addEventListener('click', deleteCardElement);
  cardElementImage.addEventListener('click', openFullImage);
  return cardElement;
};
// Обработчик отправки формы добавления карточки
const handleAddCard = (evt) => {
  evt.preventDefault();
  const cardTitle = inputCardTitle.value;
  const cardImage = inputCardImage.value;
  const CardElement = createCardElement(cardTitle, cardImage);
  if (inputCardTitle.value.trim() === '' || inputCardImage.value.trim() === '') {
    alert('Пожалуйста, заполните форму!');
  } else {
    cards.prepend(CardElement);
    closeAddCardPopup();
    inputCardTitle.value = '';
    inputCardImage.value = '';
  }
};
initialCards.forEach((card) => {
  const cardTitle = card.name;
  const cardImage = card.link;
  const CardElement = createCardElement(cardTitle, cardImage);
  cards.prepend(CardElement);
});

// !------------СЛУШАТЕЛИ--------------
editUserInfoButton.addEventListener('click', openUserInfoPopup); // Открыть попап редактирования информации пользователя
saveUserInfoButton.addEventListener('click', editUserInfo); // Сохранить профиль пользователя
closeUserInfoButton.addEventListener('click', closeUserInfoPopup); // Закрыть попап профиля информации пользователя
addCardButton.addEventListener('click', openAddCardPopup); // Открыть попап добавления фотокарточек
saveCardButton.addEventListener('click', handleAddCard); // Сохранить фотокарточку пользователя
closeAddCardButton.addEventListener('click', closeAddCardPopup); // Закрыть попап добавления фотокарточек
closeFullImageButton.addEventListener('click', closeFullImage); // Закрыть попап полного изображения карточки
