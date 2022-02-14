/**
 * @class Modal
 */
export default class Modal {
    /**
     * @constructor
     * @desc creates an instance of Modal
     */
    constructor() {
        this.body = document.body;
        this.backdrop = document.querySelector(".js-backdrop");
        this.modals = document.querySelectorAll(".js-modal");

        this.init();
    }

    init() {
        this.modals.forEach((modal) => {
            this.openBtn = modal.nextElementSibling;
            this.closeBtn = modal.querySelector(".js-close");

            this.open(modal);
            this.close(modal, this.closeBtn);
        });
    }

    /**
     * @method open
     * @desc
     */
    open(modal) {
        this.openBtn.addEventListener("click", () => {
            modal.classList.remove("is-hidden");
            modal.classList.add("is-visible");

            this.backdrop.classList.remove("is-hidden");
            this.backdrop.classList.add("is-visible");

            this.body.classList.add("disable-scroll");
        });
    }

    close(modal, closeBtn) {
        this.els = [closeBtn, this.backdrop];
        this.els.forEach((el) => {
            el.addEventListener("click", () => {
                modal.classList.remove("is-visible");
                modal.classList.add("is-hidden");

                this.backdrop.classList.remove("is-visible");
                this.backdrop.classList.add("is-hidden");

                this.body.classList.remove("disable-scroll");
            });
        });
    }
}
