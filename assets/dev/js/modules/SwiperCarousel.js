import Swiper, { Navigation } from "swiper";
import "swiper/css";

/**
 * @class SwiperCarousel
 */
export default class SwiperCarousel {
    /**
     * @constructor
     * @desc creates an instance of SwiperCarousel
     */
    constructor() {
        this.swiper = document.querySelectorAll(".swiper");

        this.init();
    }

    init() {
        this.swiper.forEach((swiper) => this.getSwiper(swiper));
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
                1024: {
                    slidesPerView: 4,
                },
            },
            modules: [Navigation],
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            observer: true,
            resistance: false,
            resizeObserver: true,
            speed: 400,
            slidesPerView: 1.3,
            spaceBetween: 20,
        };

        return new Swiper(this.swiper, this.options);
    }
}
