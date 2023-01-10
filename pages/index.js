let username = document.querySelector('.profile__user-title');
let about = document.querySelector('.profile__user-subtitle');
const editButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closebutton = popup.querySelector('.popup__close-button');
const saveButton = popup.querySelector('.popup__button');
let inputUsername = popup.querySelector('.popup-username');
let inputAbout = popup.querySelector('.popup-about');
let popupForm = popup.querySelector('.popup__container');
// Присваиваем значения импутам
inputUsername.value = username.textContent;
inputAbout.value = about.textContent;
// Открываем закрываем попап
editButton.addEventListener('click', (openPopup) => {
  popup.classList.add('popup_opened');
});
closebutton.addEventListener('click', closePopup);
function closePopup() {
  popup.classList.remove('popup_opened');
  inputUsername.value = username.textContent;
  inputAbout.value = about.textContent;
}

// Редактируем форму
// Сохраняем новые значения на сайте
saveButton.addEventListener('click', editUserInfo);
function editUserInfo(evt) {
  evt.preventDefault();
  username.textContent = inputUsername.value;
  about.textContent = inputAbout.value;
  closePopup();
}
saveButton.addEventListener('submit', editUserInfo);

// Делаем лайки карточкам
let likeButtons = Array.from(document.querySelectorAll('.card__button'));
console.log(likeButtons);
for (let i = 0; i < likeButtons.length; i++) {
  const button = likeButtons[i];
  button.addEventListener('click', () => {
    button.classList.toggle('card__button_icon-fill');
    button.classList.toggle('card__button_icon-empty');
  });
}
