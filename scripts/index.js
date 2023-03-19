import Card from './classes/Card.js';
import FormValidator from './classes/FormValidator.js';

// !------------ФУНКЦИИ--------------
// сбрасываем форму после закрытия
const resetPopupForm = (popup) => {
  const form = popup.querySelector('.popup__form');
  const errorClear = new FormValidator(options, form);
  errorClear.clearErrors();
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
};
// Открываем попап полного изображения
const openFullImage = (cardData) => {
  fullImage.src = cardData.link;
  fullImageCaption.textContent = cardData.name;
  fullImageCaption.alt = cardData.name;
  openPopup(popupOpenImageCard);
};

// Обработчик добавления карточки
const handleAddCard = (evt) => {
  evt.preventDefault();
  const cardTitle = inputCardTitle.value;
  const cardImage = inputCardImage.value;
  const card = new Card({ name: cardTitle, link: cardImage }, openFullImage);
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
  evt.target.reset();
  closePopup(popupAddCard);
};

// проходит массив карточек и добавляет их в DOM дерево
const renderCards = () => {
  initialCards.forEach((cardData) => {
    const card = new Card(cardData, openFullImage);
    const cardElement = card.generateCard();
    cards.prepend(cardElement);
  });
};

const enableValidationForms = () => {
  const formEditUserValidator = new FormValidator(options, popupFormUser);
  formEditUserValidator.enableValidation();

  const formAddImageValidator = new FormValidator(options, popupFormCard);
  formAddImageValidator.enableValidation();
};

// !------------СЛУШАТЕЛИ--------------
buttonEditProfile.addEventListener('click', openUserInfoPopup); // Открыть попап редактирования информации пользователя
buttonAddCard.addEventListener('click', openAddCardPopup); // Открыть попап добавления фотокарточек
popupFormUser.addEventListener('submit', editUserInfo); // Отправить форму пользователя
popupFormCard.addEventListener('submit', handleAddCard); // Отправить форму фотокарточки пользователя

renderCards();
enableValidationForms();
