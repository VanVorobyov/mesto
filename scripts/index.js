// !------------ПЕРЕМЕННЫЕ--------------
// Элементы
const popups = document.querySelectorAll('.popup');
const buttonsClose = document.querySelectorAll('.popup__close-button');
const cardTemplate = document.querySelector('#card-template').content; // template карточка
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

// !------------ФУНКЦИИ--------------
// сбрасываем форму после закрытия
const resetPopupForm = (popup) => {
  const form = popup.querySelector('.popup__form');
  const errors = Array.from(form.querySelectorAll('.popup__error'));
  errors.forEach((error) => {
    if (error.classList.contains('popup__error')) {
      error.textContent = '';
    }
  });
  form.reset();
};
// Закрытие на оверлей
const closePopupOverlay = (popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
  });
};
// Обработчик закрытия на клавишу escape
const handleEscClose = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

// универсальная функция открытия попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClose);
  closePopupOverlay(popup);
};

// универсальная функция закрытия попапов
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscClose);
  resetPopupForm(popup);
};

buttonsClose.forEach((button) => {
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
  disableButton(buttonSaveCard, options);
};
// Открываем попап полного изображения
const openFullImage = (cardData) => {
  fullImage.src = cardData.link;
  fullImageCaption.textContent = cardData.name;
  fullImageCaption.alt = cardData.name;
  openPopup(popupOpenImageCard);
};
// Лайки
const likeCardElement = (evt) => {
  evt.preventDefault();
  evt.target.classList.toggle('card__button_icon-fill');
};
//Удаление карточки
const deleteCardElement = (evt) => {
  evt.preventDefault();
  evt.target.closest('.card').remove();
};
// Создает новый элемент карточки на основе шаблона
const createCardElement = (cardData) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = cardData.name;
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.alt = cardData.name;
  cardImage.src = cardData.link;
  cardImage.addEventListener('click', () => openFullImage(cardData));
  cardImage.removeAttribute('href');
  cardElement.querySelector('.card__button').addEventListener('click', likeCardElement);
  cardElement.querySelector('.card__delete-button_js').addEventListener('click', deleteCardElement);
  return cardElement;
};
// Обработчик добавления карточки
const handleAddCard = (evt) => {
  evt.preventDefault();
  const cardTitle = inputCardTitle.value;
  const cardImage = inputCardImage.value;
  const cardElement = createCardElement({ name: cardTitle, link: cardImage });
  cards.prepend(cardElement);
  evt.target.reset();
  closePopup(popupAddCard);
};
// проходит массив карточек и добавляет их в DOM дерево
initialCards.forEach((card) => {
  const cardElement = createCardElement(card);
  cards.prepend(cardElement);
});

// !------------СЛУШАТЕЛИ--------------
buttonEditProfile.addEventListener('click', openUserInfoPopup); // Открыть попап редактирования информации пользователя
buttonEditProfile.addEventListener('click', openUserInfoPopup); // Открыть попап редактирования информации пользователя
popupFormUser.addEventListener('submit', editUserInfo); // Отправить форму пользователя
buttonAddCard.addEventListener('click', openAddCardPopup); // Открыть попап добавления фотокарточек
popupFormCard.addEventListener('submit', handleAddCard); // Отправить форму фотокарточки пользователя
