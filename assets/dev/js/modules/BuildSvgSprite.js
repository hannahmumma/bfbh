/**
 * @class BuildSvgSprite
 */
export default class BuildSvgSprite {
    svgSprite = document.getElementById("svg-icons");

    /**
     * @method init
     * @desc set context for svg sprite, fetch sprite, append it
     */
    init = () => {
        this.requireAll(
            require.context("/assets/dev/svg-sprite/", true, /\.svg$/)
        );

        fetch(`/wp-content/themes/bfbh-theme/assets/dist/img/icons.svg`)
            .then((res) => res.text())
            .then((data) => {
                this.svgSprite.appendChild(this.stringToEl(data));
            });
    };

    /**
     * @method requireAll
     * @desc context for webpack
     */
    requireAll = (r) => {
        this.r = r;
        this.r.keys().forEach(this.r);
    };

    stringToEl = (str) => {
        this.parser = new DOMParser();
        this.doc = this.parser.parseFromString(str, "text/html");
        this.svg = this.doc.body.querySelector("svg");

        return this.svg;
    };
}
