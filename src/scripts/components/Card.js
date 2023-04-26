export default class Card {
  constructor(data, cardConfig, { handleCardClick, handleLikeClick, handleDeleteClick, userId }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._id = data._id;
    this._likes = data.likes;

    this._userId = userId;

    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;

    this._cardConfig = cardConfig;
    this._cardTemplate = document.querySelector(cardConfig.cardTemplate);
    this._cardElement = this._cardTemplate.content.querySelector(cardConfig.cardElementSelector).cloneNode(true);
    this._image = this._cardElement.querySelector(cardConfig.imageSelector);
    this._elementLike = this._cardElement.querySelector(cardConfig.buttonLikeSelector);
    this._elementDelete = this._cardElement.querySelector(cardConfig.buttonDeleteSelector);
    this._counterLikes = this._cardElement.querySelector(cardConfig.counterSelector);
  }

  // DELETE
  _deleteRemoveButtons() {
    if (this._userId !== this._ownerId) {
      this._elementDelete.remove();
    }
  }

  deleteCard() {
    this._cardElement.closest(this._cardConfig.cardElementSelector).remove();
  }

  // LIKES

  toggleLike() {
    this._handleLikeClick();
    this._elementLike.classList.toggle(this._cardConfig.buttonToggleClass);
  }

  isLiked() {
    return this._elementLike.classList.contains(this._cardConfig.buttonToggleClass) ? true : false;
  }

  _setLikesInfo() {
    this._counterLikes.textContent = this._likes.length;
  }

  updateLikes(likes) {
    this._counterLikes.textContent = likes.length;
  }

  _setEventListeners() {
    this._elementLike.addEventListener('click', () => {
      this.toggleLike();
    });
    this._elementDelete.addEventListener('click', () => {
      this._handleDeleteClick(this._id);
    });
    this._image.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  generateCard() {
    this._cardElement.querySelector(this._cardConfig.titleSelector).textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._deleteRemoveButtons();
    this._setLikesInfo();

    this._setEventListeners();
    return this._cardElement;
  }
}
