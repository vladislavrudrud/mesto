export default class Api {
    constructor(options) {
        this._link = options.link
        this._headers = options.headers
    }

    getInitialCards() {
        return fetch(`${this._link}/cards`, {
          method: 'GET',
          headers: this._headers
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
      }
    addCard(data) {
        return fetch(`${this._link}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
              })
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }
    removeCard(cardId) {
        return fetch(`${this._link}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }
    likeCard(cardId) {
        return fetch(`${this._link}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }
    removeLikeCard(cardId) {
        return fetch(`${this._link}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }
    getUserInfo() {
        return fetch(`${this._link}/users/me`, {
            method: 'GET',
            headers: this._headers
          })
            .then(res => {
              if (res.ok) {
                return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
            })

    }
    setUserInfo(data) {
        return fetch(`${this._link}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.info
              })
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }
    editUserPhoto(data) {
        return fetch(`${this._link}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
              })
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }
}