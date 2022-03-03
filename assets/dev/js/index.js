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

const globals = () => {
    const globalsArr = [
        new BuildSvgSprite(),
        new ContactForm(),
        new MainMenu(),
        new Modal(),
        new Notice(),
    ];

    globalsArr.forEach((arr) => {
        arr.init();
    });
};

const modules = () => {
    const scripts = {
        Accordion: ".js-accordion",
        SwiperCarousel: ".js-swiper",
    };

    Object.entries(scripts).forEach(([key, value]) => {
        if (document.querySelector(`${value}`)) {
            import(`./modules/${key}`).then((module) => {
                const Key = module.default;
                const item = new Key();
                item.init();
            });
        }
    });
};

const init = () => {
    globals();
    modules();
};

window.addEventListener("load", init);
