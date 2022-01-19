/**
 * @class Modal
 */
export default class Modal {
	/**
	 * @constructor
	 * @desc creates an instance of Modal
	 */
	constructor() {
		this.backdrop = document.querySelector(".is-backdrop");
		this.modals = document.querySelectorAll(".js-modal");


		this.modalInit();
	}

	modalInit() {
		this.modals.forEach((modal) => {

			this.openBtn = modal.nextElementSibling;
			this.closeBtn = modal.querySelector(".js-close");


			this.openBtn.addEventListener('click', () => {
				this.open(modal);
			})

			this.closeBtn.addEventListener('click', () => {
				this.close(modal);
			})


		});
	}

	/**
	 * @method open
	 * @desc
	 */
	open(modal) {
		modal.classList.remove('is-hidden');
		this.backdrop.classList.remove('is-hidden')

	}

	close(modal) {
		 modal.classList.add('is-hidden');
		this.backdrop.classList.add('is-hidden')		 
	}

}
