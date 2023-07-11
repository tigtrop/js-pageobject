import { errors } from "../test-data/errors"
import BasePage from "./BasePage"

class ContactUsPage extends BasePage {

    static visit() {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
    }

    static get getFirstName() {
        return cy.get('input[name="first_name"]')
    }

    static get getLastName() {
        return cy.get('input[name="last_name"]')
    }

    static get getEmail() {
        return cy.get('input[name="email"]')
    }

    static get getComment() {
        return cy.get('textarea[name="message"]')
    }

    static get getSubmitButton() {
        return cy.get('input[type="submit"]');
    }

    static get getResetButton() {
        return cy.get('[type="reset"]');
    }

    static get getContactUsHeader() {
        return cy.get('[name="contactme"]')
    }

    static get getSuccessSubmitMessage(){
        return cy.xpath('//h1[text()="Thank You for your Message!"]');
    }

    static get getInvalidEmailError(){
        return cy.contains(errors.emailError);
    }

    static get getAllFieldsAreRequiredError(){
        return cy.contains(errors.allFieldsError);
    }

}

export default ContactUsPage;