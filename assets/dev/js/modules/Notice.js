import { getParam, delay } from "./Shared";

/**
 * @class Notice
 */
export default class Notice {
    notice = document.querySelector(".js-notice");

    noticeCloseBtn = this.notice.querySelector(".js-notice-close");

    init = () => {
        this.#open();
        this.#close();

        delay(3000).then(() => {
            this.#selfClose();
        });
    };

    #open = () => {
        this.noticeParam = getParam("notice");

        if (this.noticeParam === "thank-you") {
            this.notice.classList.add("is-visible");
        }
    };

    #close = () => {
        this.noticeCloseBtn.addEventListener("click", () => {
            this.notice.classList.remove("is-visible");
        });
    };

    /**
     * @method close
     * @desc
     */
    #selfClose = () => {
        this.noticeParam = getParam("notice");

        if (this.noticeParam === "thank-you") {
            this.notice.classList.remove("is-visible");
            window.history.pushState(
                {},
                document.title,
                window.location.pathname
            );
        }
    };
}
