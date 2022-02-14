/**
 * @class Notice
 */
export default class Notice {
    /**
     * @constructor
     * @desc creates an instance of Modal
     */
    constructor() {
        this.notice = document.querySelector(".js-notice");
        this.noticeCloseBtn = this.notice.querySelector(".js-notice-close");
        this.searchParams = new URLSearchParams(window.location.search);

        this.init();
    }

    init() {
        this.open();
        this.close();

        this.delay(3000).then(() => {
            this.selfClose();
        });
    }

    open() {
        this.noticeParam = this.getParam("notice");

        if (this.noticeParam === "thank-you") {
            this.notice.classList.add("is-visible");
        }
    }

    close() {
        this.noticeCloseBtn.addEventListener("click", () => {
            this.notice.classList.remove("is-visible");
            this.updateHistoryStack();
        });
    }

    /**
     * @method close
     * @desc
     */
    selfClose() {
        this.noticeParam = this.getParam("notice");

        if (this.noticeParam === "thank-you") {
            this.notice.classList.remove("is-visible");
            window.history.pushState(
                {},
                document.title,
                window.location.pathname
            );
        }
    }

    /**
     * @method getParam
     * @desc retrieves URL param
     * @param {string}
     * @return {string}
     */
    getParam(param) {
        if (this.searchParams.has(param)) {
            this.searchParams.forEach((value, key) => {
                if (key === param) {
                    this.value = value;
                }
            });

            return this.value;
        }
        return false;
    }

    /**
     * @method delay
     * @desc sets a timer
     * @param {integer}
     * @return {object}
     */
    delay(ms) {
        this.ms = ms;

        return new Promise((resolve) => {
            setTimeout(resolve, this.ms);
        });
    }
}
