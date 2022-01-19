/**
 * @class BuildSvgSprite
 */
export default class BuildSvgSprite {
	/**
	 * @constructor
	 * @desc creates an instance of BuildSvgSprite
	 */
	constructor() {
		this.svgSprite = document.getElementById("svg-icons");
		this.populateSvgSprite();
	}

	/**
	 * @method populateSvgSprite
	 * @desc
	 */
	populateSvgSprite() {
		this.requireAll(
			require.context("/assets/dev/svg-sprite/", true, /\.svg$/)
		);

		fetch(`/wp-content/themes/bfbh-theme/assets/dist/img/icons.svg`)
			.then((res) => res.text())
			.then((data) => {
				this.svgSprite.innerHTML = data;
			});
	}

	/**
	 * @method requireAll
	 * @desc
	 */
	requireAll(r) {
		r.keys().forEach(r);
	}
}
