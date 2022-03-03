/* global grecaptcha, ajax_object  */

/**
 * @class Modal
 */
export default class ContactForm {
    contactForm = document.querySelector(".contact-form form");

    spinner = this.contactForm.querySelector(".spinner");

    init = () => {
        this.submitForm();
        this.styleRecaptcha();
    };

    submitForm() {
        this.contactForm.addEventListener("submit", (e) => {
            this.spinner.classList.remove("is-hidden");
            this.spinner.nextElementSibling.innerText = "Processing...";
            this.recaptcha(e);
        });
    }

    recaptcha = (e) => {
        e.preventDefault();

        grecaptcha.ready(() => {
            grecaptcha
                .execute("6Le-gkAeAAAAAEiODiccNcgGEs5q6NM3v7W5eYtC", {
                    action: "submit",
                })
                .then((token) => {
                    this.form = document.querySelector(".contact-form form");
                    this.formData = new FormData(this.form);

                    this.formData.append("action", "initMail");
                    this.formData.append("token", token);

                    /* eslint-disable-next-line camelcase */
                    fetch(ajax_object.ajax_url, {
                        method: "POST",
                        credentials: "same-origin",
                        body: this.formData,
                    })
                        .then((response) => response.text())
                        .then((data) => {
                            if (parseInt(data, 10) === 1) {
                                window.location.href = `${window.location.href}?notice=thank-you`;
                            } else {
                                this.form.reset();
                                this.form.firstElementChild.classList.remove(
                                    "is-hidden"
                                );
                                this.form
                                    .querySelector(".spinner")
                                    .classList.remove("is-visible");
                                this.form
                                    .querySelector(".spinner")
                                    .classList.add("is-hidden");
                                this.form.querySelector(
                                    ".spinner"
                                ).nextElementSibling.innerText = "Submit";
                            }
                        })
                        .catch((error) => {
                            /* eslint-disable-next-line no-console */
                            console.log(error);
                        });
                });
        });
    };

    styleRecaptcha = () => {
        this.badge = document.querySelector(".grecaptcha-badge");

        if (!this.badge) {
            return false;
        }

        this.badge.parentNode.classList.add("recaptcha-wrapper");

        return true;
    };
}
