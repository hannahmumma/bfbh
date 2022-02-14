/**
 * @jest-environment jsdom
 */

import ContactForm from "../assets/dev/js/modules/ContactForm";

test("Modify", () => {
    const contact = new ContactForm();
    const spy = jest.spyOn(contact, "recaptcha").mockImplementation(() => 1);

    expect(contact.recaptcha()).toBe(1);

    spy.mockRestore();
});
