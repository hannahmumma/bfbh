/**
 * @class Accordion
 */
export default class Accordion {
    accordions = document.querySelectorAll("[data-accordion]");

    init = () => {
        this.accordions.forEach((accordion) => {
            this.accordionItems =
                accordion.querySelectorAll(".js-accordion-item");
            this.accordionItems.forEach((item) => {
                item.addEventListener("click", () => {
                    if (
                        item.nextElementSibling.classList.contains("is-closed")
                    ) {
                        this.oneItem(item, "is-closed", "is-opened");
                    } else {
                        this.oneItem(item, "is-opened", "is-closed");
                    }
                });
            });

            this.accordionBtns =
                accordion.querySelectorAll(".js-accordion-btn");
            this.accordionBtns.forEach((btn) => {
                btn.addEventListener("click", () => {
                    if (btn.matches('[data-accordion-status="is-closed"]')) {
                        this.allItems(btn, "is-opened", "is-closed");
                        btn.innerText = "Close all";
                    } else {
                        this.allItems(btn, "is-closed", "is-opened");
                        btn.innerText = "Open all";
                    }
                });
            });
        });
    };

    oneItem = (item, str1, str2) => {
        this.item = item;
        this.str1 = str1;
        this.str2 = str2;

        this.item.nextElementSibling.classList.remove(this.str1);
        this.item.nextElementSibling.classList.add(this.str2);

        this.item.querySelector(".icon-wrapper").classList.remove(this.str1);
        this.item.querySelector(".icon-wrapper").classList.add(this.str2);
    };

    allItems = (btn, str1, str2) => {
        this.btn = btn;
        this.str1 = str1;
        this.str2 = str2;

        this.btn.setAttribute("data-accordion-status", this.str1);
        this.btn
            .closest(".accordion__list-item")
            .querySelectorAll(`.${this.str2}`)
            .forEach((item) => {
                item.classList.remove(str2);
                item.classList.add(str1);
            });
    };
}
