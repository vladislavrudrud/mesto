export class UserInfo {
    constructor({ nameSelector, infoSelector }) {
        this.nameUser = document.querySelector(nameSelector);
        this.infoUser = document.querySelector(infoSelector);
    };
    getUserInfo() {
        const userInfo = {
            name: this.nameUser.innerText,
            info: this.infoUser.innerText,
        };
        return userInfo;
    };
    setUserInfo({ name, info }) {
        this.nameUser.innerText = name;
        this.infoUser.innerText = info;
        
    };
};