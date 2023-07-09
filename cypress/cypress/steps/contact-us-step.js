import ContactUsPage from "../../pages/ContactUsPage";
import { users } from "../../test-data/users";

export class ContactUsStep {
    visit() {
        ContactUsPage.visit();
        cy.url().should('contain', 'contactus');
    }

    fillContactUsForm(users) {
        if (users.firstName) {
            ContactUsPage.getFirstName.type(users.firstName);
        }
        if (users.lastName) {
            ContactUsPage.getLastName.type(users.lastName);
        }
        if (users.email) {
            ContactUsPage.getEmail.type(users.email);
        }
        if (users.comment) {
            ContactUsPage.getComment.type(users.comment);
        }
    }

    clickSumbitButton() {
        ContactUsPage.getSubmitButton.click();
    }

    clickResetButon() {
        ContactUsPage.getResetButton.click();
    }

    verifyEmptyForm(){
        ContactUsPage.getFirstName.should('have.value', '');
        ContactUsPage.getLastName.should('have.value', '');
        ContactUsPage.getEmail.should('have.value', '');
        ContactUsPage.getComment.should('have.value', '');
    }

    verifySucceessMessage() {
        ContactUsPage.getSuccessSubmitMessage.should('be.visible');
    }
    
    verifyInvalidEmailError() {
        ContactUsPage.getInvalidEmailError.should('be.visible');
    }

    verifyAllFieldsRequiredError() {
        ContactUsPage.getAllFieldsAreRequiredError.should('be.visible');
    }
    
}