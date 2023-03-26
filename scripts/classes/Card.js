export default class Card {
  constructor(cardData, cardConfig, handleCardClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._handleCardClick = handleCardClick;
    this._cardConfig = cardConfig;
    this._cardTemplate = document.querySelector(cardConfig.cardTemplate);
    this._cardElement = this._cardTemplate.content.querySelector(cardConfig.cardElementSelector).cloneNode(true);
    this._image = this._cardElement.querySelector(cardConfig.imageSelector);
    this._elementLike = this._cardElement.querySelector(cardConfig.buttonLikeSelector);
    this._elementDelete = this._cardElement.querySelector(cardConfig.buttonDeleteSelector);
  }

  _toggleLike = () => {
    this._elementLike.classList.toggle(this._cardConfig.buttonToggleClass);
  };

  _deleteCard = () => {
    this._cardElement.closest(this._cardConfig.cardElementSelector).remove();
  };

  _setEventListeners() {
    this._elementDelete.addEventListener('click', this._deleteCard);
    this._elementLike.addEventListener('click', this._toggleLike);
    this._image.addEventListener('click', () => this._handleCardClick({ name: this._name, link: this._link }));
  }

  generateCard() {
    this._setEventListeners();
    this._cardElement.querySelector(this._cardConfig.titleSelector).textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    return this._cardElement;
  }
}
