// Объявление переменных
const popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let username = document.querySelector('.profile__user-title');
let about = document.querySelector('.profile__user-subtitle');
let inputUsername = popup.querySelector('.popup__input_user-info_username');
let inputAbout = popup.querySelector('.popup__input_user-info_about');
const editButton = document.querySelector('.profile__button-edit');
const closebutton = popup.querySelector('.popup__close-button');
const saveButton = popup.querySelector('.popup__button');

// Открываем попап
function openPopup() {
  inputUsername.value = username.textContent;
  inputAbout.value = about.textContent;
  popup.classList.add('popup_opened');
}
// Закрываем попап
function closePopup() {
  popup.classList.remove('popup_opened');
}
// Сохраняем новые значения на сайте
function editUserInfo(evt) {
  evt.preventDefault();
  username.textContent = inputUsername.value;
  about.textContent = inputAbout.value;
  closePopup();
}
// Слушатели событий
editButton.addEventListener('click', openPopup);
closebutton.addEventListener('click', closePopup);
saveButton.addEventListener('click', editUserInfo);
saveButton.addEventListener('submit', editUserInfo);
