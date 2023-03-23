export default class Card {
  constructor(cardData, handleCardClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._handleCardClick = handleCardClick;
    this._cardTemplate = document.querySelector('#card-template');
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.card__image');
    this._elementLike = this._element.querySelector('.card__button');
    this._elementDelete = this._element.querySelector('.card__delete-button');
  }

  _getTemplate() {
    const cardElement = this._cardTemplate.content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _toggleLike = () => {
    this._elementLike.classList.toggle('card__button_icon-fill');
  };

  _deleteCard = () => {
    this._element.closest('.card').remove();
  };

  _setEventListeners() {
    this._elementDelete.addEventListener('click', this._deleteCard);
    this._elementLike.addEventListener('click', this._toggleLike);
    this._image.addEventListener('click', () => this._handleCardClick({ name: this._name, link: this._link }));
  }

  generateCard() {
    this._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    return this._element;
  }
}
