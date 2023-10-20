export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(data) {
    data.forEach((item) => {
      this._renderer(item);
    })
  }

  appendItem(item) {
    this._container.append(item);
  }

  addItem(item) {
    this._container.prepend(item)
  }
}