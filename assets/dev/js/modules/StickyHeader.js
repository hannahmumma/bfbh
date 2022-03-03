/**
 * @class StickyNav
 */
export default class StickyHeader {
    skipTo = document.getElementById("skip-to");

    init = () => {
        this.options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        };

        this.observer = new IntersectionObserver(this.callback, this.options);
        this.observer.observe(this.skipTo);
    };

    callback = (entries) => {
        entries.forEach((entry) => {
            this.header = entry.target.nextElementSibling;

            if (!entry.isIntersecting) {
                this.header.classList.add("is-sticky");
            } else {
                this.header.classList.remove("is-sticky");
            }
        });
    };
}
