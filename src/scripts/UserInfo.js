export class UserInfo {
    constructor({ nameSelector, infoSelector, photoSelector }) {
        this.nameUser = document.querySelector(nameSelector);
        this.infoUser = document.querySelector(infoSelector);
        this.photoUser = document.querySelector(photoSelector)
    };
    getUserInfo() {
        const userInfo = {
            name: this.nameUser.innerText,
            info: this.infoUser.innerText,
            avatar: this.photoUser.src
        };
        return userInfo;
    };
    setUserInfo({ name, about, avatar }) {
        this.nameUser.innerText = name;
        this.infoUser.innerText = about;
        this.photoUser.src = avatar;
    };
};