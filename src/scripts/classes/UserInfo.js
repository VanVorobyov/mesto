export default class UserInfo {
  constructor({ userNameSelector, userAboutSelector }) {
    this._name = document.querySelector(userNameSelector);
    this._about = document.querySelector(userAboutSelector);
  }

  getUserInfo() {
    const userNameValue = this._name.textContent;
    const userAboutValue = this._about.textContent;
    return { name: userNameValue, about: userAboutValue };
  }

  setUserInfo({ username, about }) {
    this._name.textContent = username;
    this._about.textContent = about;
  }
}
