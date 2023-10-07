import Popup from "./Popup.js";
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.popupPhoto = this._popupElement.querySelector(".popup__photo")
        this.popupCaption = this._popupElement.querySelector(".popup__caption")
    }
    open(name, link) {
        this.popupPhoto.src = link;
        this.popupPhoto.alt = name;
        this.popupCaption.textContent = name;
        super.open()
    }
}

