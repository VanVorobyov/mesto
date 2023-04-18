(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},t={popups:document.querySelectorAll(".popup"),buttonsClose:document.querySelectorAll(".popup__close-button"),cards:document.querySelector(".cards")},r={popupUserInfo:".popup_type_edit",popupFormUser:document.querySelector(".popup__form_user"),inputUserName:document.querySelector(".popup_type_edit .popup__input_user-info_username"),inputUserAbout:document.querySelector(".popup_type_edit .popup__input_user-info_about"),usernameSelector:".profile__user-title",userAboutSelector:".profile__user-subtitle",buttonEditProfile:document.querySelector(".profile__button-edit"),buttonSaveUserInfo:document.querySelector(".popup_type_edit .popup__button_edit-user-info")},n={popupAddCard:".popup_type_add-card",popupFormCard:document.querySelector(".popup__form_add-card"),inputCardTitle:document.querySelector(".popup_type_add-card .popup__input_card_title"),inputCardImage:document.querySelector(".popup_type_add-card .popup__input_card_image"),buttonAddCard:document.querySelector(".profile__button-add"),buttonSaveCard:document.querySelector(".popup_type_add-card .popup__button_add-image")},o={cardTemplate:"#card-template",cardElementSelector:".card",imageSelector:".card__image",counterSelector:".card__counter",titleSelector:".card__title",buttonLikeSelector:".card__button",buttonDeleteSelector:".card__delete-button",buttonToggleClass:"card__button_icon-fill"};function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&u(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function s(e,t,r){return(t=p(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}var f=function(){function e(t,r,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_toggleLike",(function(){o._elementLike.classList.toggle(o._cardConfig.buttonToggleClass)})),s(this,"_deleteCard",(function(){o._cardElement.closest(o._cardConfig.cardElementSelector).remove()})),this._name=t.name,this._link=t.link,this._handleCardClick=n,this._cardConfig=r,this._cardTemplate=document.querySelector(this._cardConfig.cardTemplate),this._cardElement=this._cardTemplate.content.querySelector(this._cardConfig.cardElementSelector).cloneNode(!0),this._image=this._cardElement.querySelector(this._cardConfig.imageSelector),this._counter=this._cardElement.querySelector(this._cardConfig.counterSelector),this._elementLike=this._cardElement.querySelector(this._cardConfig.buttonLikeSelector),this._elementDelete=this._cardElement.querySelector(this._cardConfig.buttonDeleteSelector)}var t,r;return t=e,(r=[{key:"_setEventListeners",value:function(){var e=this;this._elementDelete.addEventListener("click",this._deleteCard,{once:!0}),this._elementLike.addEventListener("click",this._toggleLike),this._image.addEventListener("click",(function(){return e._handleCardClick({name:e._name,link:e._link})}))}},{key:"generateCard",value:function(){return this._setEventListeners(),this._cardElement.querySelector(this._cardConfig.titleSelector).textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._cardElement}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function m(e,t,r){return(t=b(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===y(t)?t:String(t)}var _=function(){function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"_showInputError",(function(e){e.classList.add(n._inputErrorClass);var t=n._formElement.querySelector(".popup__error_".concat(e.id));t.textContent=e.validationMessage,t.classList.add(n._errorClass)})),m(this,"_hideInputError",(function(e){e.classList.remove(n._inputErrorClass),n._formElement.querySelector(".popup__error_".concat(e.id)).classList.remove(n._errorClass)})),m(this,"_isValid",(function(e){return e.validity.valid})),m(this,"_isInputValid",(function(e){n._isValid(e)?n._hideInputError(e):n._showInputError(e)})),m(this,"_enableButton",(function(){n._buttonElement.classList.remove(n._inactiveButtonClass),n._buttonElement.removeAttribute("disabled")})),m(this,"_disableButton",(function(){n._buttonElement.classList.add(n._inactiveButtonClass),n._buttonElement.setAttribute("disabled",!0)})),m(this,"_toggleButtonState",(function(){n._inputList.every((function(e){return n._isValid(e)}))?n._enableButton():n._disableButton()})),m(this,"_setEventListeners",(function(){n._inputList.forEach((function(e){e.addEventListener("input",(function(){n._isInputValid(e),n._toggleButtonState()}))}))})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=r,this._inputList=Array.from(r.querySelectorAll(t.inputSelector)),this._buttonElement=this._formElement.querySelector(".popup__button")}var t,r;return t=e,(r=[{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-button")&&e.close()}))}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},w.apply(this,arguments)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(o){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._handleSubmitForm=t,r._form=r._popup.querySelector(".popup__form"),r._inputList=r._form.querySelectorAll(".popup__input"),r._submitButton=r._form.querySelector(".popup__button"),r._handleFormSubmit=r._handleFormSubmit.bind(C(r)),r}return t=u,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"_handleFormSubmit",value:function(e){e.preventDefault(),this._handleSubmitForm(this._getInputValues()),this.close()}},{key:"close",value:function(){this._form.reset(),w(j(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){w(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleFormSubmit)}}])&&E(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},q.apply(this,arguments)}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(n);if(o){var r=T(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupCaption=t._popup.querySelector(".popup__full-image-caption"),t._popupImage=t._popup.querySelector(".popup__full-image"),t}return t=u,(r=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupCaption.textContent=e.name,q(T(u.prototype),"open",this).call(this)}}])&&L(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==U(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===U(o)?o:String(o)),n)}var o}var R=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=n,this._renderer=o,this._container=r}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this.clear(),this._items.forEach((function(t){e._renderer(t)}))}}])&&B(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function V(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===x(o)?o:String(o)),n)}var o}var D=function(){function e(t){var r=t.userNameSelector,n=t.userAboutSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(r),this._about=document.querySelector(n),this._avatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,r=e.about;this._name.textContent=t,this._about.textContent=r}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}},{key:"setUserId",value:function(e){this._userId=e}}])&&V(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),F=new a({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"e2a854ae-97cb-44db-b5bb-1f03cec72045","Content-Type":"application/json"}}),N={},z=new A(".popup_type_opened-image"),M=function(e){return z.open(e)};z.setEventListeners();var H=function(e){return new f(e,o,M).generateCard()},G=new R({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){G.addItem(H(e))}},t.cards);G.renderItems();var J=new D({userNameSelector:r.usernameSelector,userAboutSelector:r.userAboutSelector});F.getUserInfo().then((function(e){J.setUserInfo(e.name,e.about),J.setUserAvatar(e.avatar),J.getUserId(e._id)})).catch((function(e){console.log(e)}));var K=new P(r.popupUserInfo,(function(e){J.setUserInfo(e),K.close()}));K.setEventListeners(),r.buttonEditProfile.addEventListener("click",(function(){return t=(e=J.getUserInfo()).name,r=e.about,K.setInputValues({name:t,about:r}),N["user-form"].resetValidation(),void K.open();var e,t,r}));var Q,W=new P(n.popupAddCard,(function(e){G.addItem(H(e))}));W.setEventListeners(),n.buttonAddCard.addEventListener("click",(function(){N["card-form"].resetValidation(),W.open()})),Q=e,Array.from(document.querySelectorAll(e.formSelector)).forEach((function(e){var t=new _(Q,e),r=e.getAttribute("name");N[r]=t,t.enableValidation()}))})();
//# sourceMappingURL=main.js.map