import Swiper, { Navigation, Mousewheel } from "swiper";
import "swiper/css";

/**
 * @class SLider
 */
export default class Slider {
	/**
	 * @constructor
	 * @desc creates an instance of SLider
	 */
	constructor() {
		this.swiper = document.querySelectorAll(".swiper");

		this.sliderInit();
	}

	sliderInit() {
		this.swiper.forEach((slider) => this.getSwiper(slider));
	}

	getSwiper(swiper) {
		this.swiper = swiper;

		this.options = {
			autoplay: {
				delay: 3000,
			},
			breakpoints: {
				768: {
					slidesPerView: 3,
				},
			},
			createElements: true,
			modules: [Navigation],
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			observer: true,
			resistance: false,
			resizeObserver: true,
			speed: 400,
			slidesPerView: 2,
		};

		return new Swiper(this.swiper, this.options);
	}
}
