import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCaption = this._popup.querySelector('.popup__full-image-caption');
    this._popupImage = this._popup.querySelector('.popup__full-image');
  }
  open(data) {
    this._popupImage.src = data.link;
    this._popupImage.alt = data.name;
    this._popupCaption.textContent = data.name;
    super.open();
  }
}
