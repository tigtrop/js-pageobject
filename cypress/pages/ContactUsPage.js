import { errors } from "../test-data/errors"
import BasePage from "./BasePage"

class ContactUsPage extends BasePage {

    getFirstName() {
        return cy.get('input[name="first_name"]')
    }

    getLastName() {
        return cy.get('input[name="last_name"]')
    }

    getEmail() {
        return cy.get('input[name="email"]')
    }

    getComment() {
        return cy.get('textarea[name="message"]')
    }

    getSubmitButton() {
        return cy.get('#form_buttons').contains('SUBMIT');
    }

    getResetButton() {
        return cy.get('[type="reset"]');
    }

    getContactUsHeader() {
        return cy.get('[name="contactme"]')
    }

    getSuccessSubmitMessage(){
        return cy.get('div#contact_reply > h1').contains('Thank You for your Message!');
    }

    fillContactUsForm(users) {
        if (users.firstName) {
            this.getFirstName().type(users.firstName);
        }
        if (users.lastName) {
            this.getLastName().type(users.lastName);
        }
        if (users.email) {
            this.getEmail().type(users.email);
        }
        if (users.comment) {
            this.getComment().type(users.comment);
        }
    }

    getInvalidEmailError(){
        return cy.contains(errors.emailError);
    }

    getAllFieldsAreRequiredError(){
        return cy.contains(errors.allFieldsError);
    }

    clickSumbitButton() {
        this.getSubmitButton().click();
    }

    clickResetButon() {
        this.getResetButton().click();
    }

}

export default ContactUsPage;