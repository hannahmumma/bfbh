/**
 * @class MainMenu
 */
export default class MainMenu {
	/**
	 * @constructor
	 * @desc creates an instance of Modal
	 */
	constructor() {
		this.header = document.querySelector(".header");
		this.mainMenu = document.querySelector(".js-main-menu");
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
			this.mainMenu.classList.add("is-visible");
			this.mainMenu.classList.remove("is-hidden");

			this.openBtn.classList.add("is-hidden");
			this.closeBtn.classList.remove("is-hidden");
		});
	}

	/**
	 * @method close
	 * @desc
	 */
	close() {
		this.closeBtn.addEventListener("click", () => {
			this.mainMenu.classList.remove("is-visible");
			this.mainMenu.classList.add("is-hidden");

			this.openBtn.classList.remove("is-hidden");
			this.closeBtn.classList.add("is-hidden");
		});
	}
}
