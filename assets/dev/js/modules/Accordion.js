/**
 * @class Accordion
 */
export default class Accordion {
	/**
	 * @constructor
	 * @desc creates an instance of Modal
	 */
	constructor() {
		this.accordions = document.querySelectorAll("[data-accordion]");
		this.accordionInit();
	}

	accordionInit() {
		this.accordions.forEach((accordion) => {

			this.accordionItems = accordion.querySelectorAll(".js-accordion-item");			
			this.accordionItems.forEach((item) => {
				item.addEventListener('click', () => {
					if (item.nextElementSibling.classList.contains('is-closed')) {
						this.openCloseItems(item, 'is-closed', 'is-opened');
					} else {
						this.openCloseItems(item, 'is-opened', 'is-closed');
					}
				});				
			});

			this.accordionBtns = accordion.querySelectorAll(".js-accordion-btn");
			this.accordionBtns.forEach((btn) => {
				btn.addEventListener('click', () => {
					if (btn.matches('[data-accordion-status="is-closed"]') ) {
						this.openAllCloseAll(btn, 'is-opened', 'is-closed');
						btn.innerText = "Close all";

					} else {
						this.openAllCloseAll(btn, 'is-closed', 'is-opened');	
						btn.innerText = "Open all";
					}
				});
			});

		});
	}
	openCloseItems(item, str1, str2) {
		item.nextElementSibling.classList.remove(str1);	
		item.nextElementSibling.classList.add(str2);

		item.querySelector('.icon-wrapper').classList.remove(str1);
		item.querySelector('.icon-wrapper').classList.add(str2);
	}

	openAllCloseAll(btn, str1, str2) {
		btn.setAttribute('data-accordion-status', str1);
		btn.closest('.accordion__list-item').querySelectorAll(`.${str2}`).forEach((item) => {
			item.classList.remove(str2);
			item.classList.add(str1);
		});
	}

}
