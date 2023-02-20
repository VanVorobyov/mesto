// !------------ПЕРЕМЕННЫЕ--------------
// Элементы
const popup = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.popup__close-button');
const cardTemplate = document.querySelector('#card-template').content; // template карточка
const cards = document.querySelector('.cards'); // Родитель карточек куда будем добавлять карточки
const popupFormUser = document.querySelector('.popup_form-user');
const popupFormCard = document.querySelector('.popup__form_add-card');
// ------------------Попап редактирования пользователя
const popupUserInfo = document.querySelector('.popup_user-unfo');
const inputUserName = popupUserInfo.querySelector('.popup__input_user-info_username'); // инпут для ввода имени пользователя
const inputUserAbout = popupUserInfo.querySelector('.popup__input_user-info_about'); // инпут для ввода описания пользователя
const username = document.querySelector('.profile__user-title'); // Имя пользователя
const userAbout = document.querySelector('.profile__user-subtitle'); // Описание пользователя
// Кнопки
const editUserInfoButton = document.querySelector('.profile__button-edit'); // Кнопка "Редактирование профиля пользователя"
const saveUserInfoButton = popupUserInfo.querySelector('.popup__button_edit-user-info'); // Кнопка "Сохранение профиля пользователя"
// -----------------Попап добавления карточек
const popupAddCard = document.querySelector('.popup_add-card');
const inputCardTitle = popupAddCard.querySelector('.popup__input_card_title'); //инпут для заголовка карточки
const inputCardImage = popupAddCard.querySelector('.popup__input_card_image'); //инпут для загрузки изображения карточки
// Кнопки:
const addCardButton = document.querySelector('.profile__button-add'); // Добавление фотокарточек
const saveCardButton = popupAddCard.querySelector('.popup__button_add-image'); // Сохранение фотокарточек
// -----------------Попап открытия изображения карточки
const popupOpenImageCard = document.querySelector('.popup_image-open');
const fullImage = document.querySelector('.popup__full-image'); // Полное изображение карточки
const fullImageCaption = document.querySelector('.popup__full-image-caption'); //  Описание полного изображения карточки

// !------------ФУНКЦИИ--------------
// универсальная функция открытия попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};
// универсальная функция закрытия попапов
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//ПОЛЬЗОВАТЕЛЬ
// Открываем попап редактирования пользователя
const openUserInfoPopup = () => {
  inputUserName.value = username.textContent;
  inputUserAbout.value = userAbout.textContent;
  openPopup(popupUserInfo);
};
// Редактирование пользователя
const editUserInfo = (evt) => {
  evt.preventDefault();
  username.textContent = inputUserName.value;
  userAbout.textContent = inputUserAbout.value;
  closePopup(popupUserInfo);
};

//КАРТОЧКИ
// Открываем попап добавления фотокарточек
const openAddCardPopup = () => {
  openPopup(popupAddCard);
};
// Открываем попап полного изображения
const openFullImage = (evt) => {
  evt.preventDefault();
  fullImage.src = evt.target.src;
  fullImageCaption.textContent = evt.target.alt;
  fullImageCaption.alt = evt.target.alt;
  openPopup(popupOpenImageCard);
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
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = name;
  cardElement.querySelector('.card__image').addEventListener('click', openFullImage);
  cardElement.querySelector('.card__image').removeAttribute('href');
  cardElement.querySelector('.card__button').addEventListener('click', likeCardElement);
  cardElement.querySelector('.card__delete-button_js').addEventListener('click', deleteCardElement);
  return cardElement;
};
// Обработчик отправки формы добавления карточки
const handleAddCard = (evt) => {
  evt.preventDefault();
  const cardTitle = inputCardTitle.value;
  const cardImage = inputCardImage.value;
  const cardElement = createCardElement(cardTitle, cardImage);
  if (inputCardTitle.value.trim() === '' || inputCardImage.value.trim() === '') {
    alert('Пожалуйста, заполните форму!');
  } else {
    cards.prepend(cardElement);
    evt.target.reset();
    closePopup(popupAddCard);
  }
};
initialCards.forEach((card) => {
  const cardTitle = card.name;
  const cardImage = card.link;
  const cardElement = createCardElement(cardTitle, cardImage);
  cards.prepend(cardElement);
});

// !------------СЛУШАТЕЛИ--------------
editUserInfoButton.addEventListener('click', openUserInfoPopup); // Открыть попап редактирования информации пользователя
popupFormUser.addEventListener('submit', editUserInfo); // Отправить форму пользователя
addCardButton.addEventListener('click', openAddCardPopup); // Открыть попап добавления фотокарточек
popupFormCard.addEventListener('submit', handleAddCard); // Отправить форму фотокарточки пользователя
