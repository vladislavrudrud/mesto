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
    setUserInfo({ name, info, avatar }) {
        this.nameUser.innerText = name;
        this.infoUser.innerText = info;
        this.photoUser.src = avatar;
    };
};