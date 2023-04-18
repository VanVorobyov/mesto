export default class UserInfo {
  constructor({ userNameSelector, userAboutSelector, userAvatarSelector }) {
    this._name = document.querySelector(userNameSelector);
    this._about = document.querySelector(userAboutSelector);
    this._avatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    const userNameValue = this._name.textContent;
    const userAboutValue = this._about.textContent;
    return { name: userNameValue, about: userAboutValue };
  }

  setUserInfo({ name, about }) {
    this._name.textContent = name;
    this._about.textContent = about;
  }

  setUserAvatar(avatar) {
    this._avatar.src = avatar;
  }

  setUserId(userId) {
    this._userId = userId;
  }
}
