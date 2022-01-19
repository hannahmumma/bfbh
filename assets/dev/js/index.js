import "../css/index.css";
import "./assets";

import BuildSvgSprite from "./modules/BuildSvgSprite";
import MainMenu from "./modules/MainMenu";
import Modal from "./modules/Modal";

if (module.hot) {
	module.hot.accept();
}

const globals = () => [
	new BuildSvgSprite(), 
	new MainMenu(), 
	new Modal()
];

const components = () => {
	const scripts = {
		Accordion: "[data-accordion]",
		Slider: "[data-slider]",
		StickyHeader: ".js-header",
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
	components();
};

window.addEventListener("load", init);
