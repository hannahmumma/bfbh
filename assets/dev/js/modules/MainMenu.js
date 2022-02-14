/**
 * @class MainMenu
 */
export default class MainMenu {
    /**
     * @constructor
     * @desc creates an instance of Modal
     */
    constructor() {
        this.body = document.body;
        this.backdrop = document.querySelector(".js-backdrop");
        this.header = document.querySelector(".header");
        this.mainMenu = document.querySelector(".js-main-menu");
        this.mainMenuItems = this.mainMenu.querySelectorAll(".menu__list-item");
        this.openBtn = this.header.querySelector(".js-open-btn");
        this.closeBtn = this.header.querySelector(".js-close-btn");

        this.init();
    }

    init() {
        this.open();
        this.close();
    }

    /**
     * @method open
     * @desc
     */
    open() {
        this.openBtn.addEventListener("click", () => {
            this.backdrop.classList.add("is-visible");
            this.backdrop.classList.remove("is-hidden");

            this.mainMenu.classList.add("is-visible");
            this.mainMenu.classList.remove("is-hidden");

            this.body.classList.add("disable-scroll");
            this.header.classList.add("is-open");
        });
    }

    /**
     * @method close
     * @desc
     */
    close() {
        this.els = [this.closeBtn, this.backdrop, ...this.mainMenuItems];

        this.els.forEach((el) => {
            el.addEventListener("click", () => {
                this.backdrop.classList.remove("is-visible");
                this.backdrop.classList.add("is-hidden");

                this.mainMenu.classList.remove("is-visible");
                this.mainMenu.classList.add("is-hidden");

                this.body.classList.remove("disable-scroll");
                this.header.classList.remove("is-open");
            });
        });
    }
}
