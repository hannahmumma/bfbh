import "../css/index.css";
import "./assets";

import BuildSvgSprite from "./modules/BuildSvgSprite";
import ContactForm from "./modules/ContactForm";
import MainMenu from "./modules/MainMenu";
import Modal from "./modules/Modal";
import Notice from "./modules/Notice";

if (module.hot) {
    module.hot.accept();
}

const globals = () => [
    new BuildSvgSprite(),
    new ContactForm(),
    new MainMenu(),
    new Modal(),
    new Notice(),
];

const modules = () => {
    const scripts = {
        Accordion: ".js-accordion",
        SwiperCarousel: ".js-swiper",
    };

    Object.entries(scripts).forEach(([key, value]) => {
        if (document.querySelector(`${value}`)) {
            import(`./modules/${key}`).then((module) => {
                const Key = module.default;
                return new Key();
            });
        }
    });
};

const init = () => {
    globals();
    modules();
};

window.addEventListener("load", init);
