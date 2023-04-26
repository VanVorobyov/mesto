import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCaption = this._popup.querySelector('.popup__full-image-caption');
    this._popupImage = this._popup.querySelector('.popup__full-image');
  }
  open({ name, link }) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupCaption.textContent = name;
    super.open();
  }
}
