class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.closeBtn = this.modal.querySelector(".modal-close");
    this.overlay = this.modal.querySelector(".overlay");
    this.init();
  }

  open() {
    this.modal.classList.add("modal-showed");
  }

  close() {
    this.modal.classList.remove("modal-showed");
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  init() {
    this.closeBtn.addEventListener("click", () => {
      this.close();
    });

    if (this.overlay) {
      this.overlay.addEventListener("click", (event) => {
        if (event.target === this.overlay) {
          this.close();
        }
      });
    }
  }
}

export default Modal;