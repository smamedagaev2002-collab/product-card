export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    // Оверлей должен появиться раньше, чем #initClose начнёт на него подписываться
    this.overlay = this.#createOverlay();
    this.#initOpen(buttonId);
    this.#initClose(shouldCloseOnOverlay);
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  // Каждый экземпляр Modal делает себе собственный оверлей
  #createOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.append(overlay);
    return overlay;
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    });
  }

  #initClose(shouldCloseOnOverlay) {
    // Ищем по классу: id в HTML должен быть уникальным
    const closeButton = this.modal.querySelector('.modal-close-button');

    closeButton.addEventListener('click', () => {
      this.close();
    });

    if (shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', () => {
        this.close();
      });
    }
  }
}
