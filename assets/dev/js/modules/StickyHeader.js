/**
 * @class StickyNav
 */
export default class StickyHeader {
	/**
	 * @constructor
	 * @desc creates an instance of StickyNav
	 */
	constructor() {
		this.content = document.getElementById("skip-to");
		this.init();
	}

	init() {
		this.options = {
			root: null,
			rootMargin: "0px",
			threshold: 1.0,
		};

		this.observer = new IntersectionObserver(this.callback, this.options);
		this.observer.observe(this.content);
	}

	callback(entries) {
		entries.forEach((entry) => {
			const header = entry.target.nextElementSibling;

			if (!entry.isIntersecting) {
				header.classList.add("is-sticky");
			} else {
				header.classList.remove("is-sticky");
			}
		});
	}
}
