export default class UserInfo {
  constructor({ userNameSelector, userAboutSelector, userAvatarSelector }) {
    this._name = document.querySelector(userNameSelector);
    this._about = document.querySelector(userAboutSelector);
    this._avatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    };
  }

  getUserId() {
    return this._id;
  }

  setUserInfo(info) {
    this._name.textContent = info.name;
    this._about.textContent = info.about;
    this._avatar.src = info.avatar;
    this._id = info._id;
  }
}
