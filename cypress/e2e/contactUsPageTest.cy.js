/// <reference types="Cypress" />
import HomePage from "../pages/HomePage";
import BasePage from "../pages/BasePage";
import OurProductsPage from "../pages/OurProducsPage";
import ContactUsPage from "../pages/ContactUsPage";
import { users } from "../test-data/users"

const basePage = new BasePage();
const homePage = new HomePage();
const ourProductsPage = new OurProductsPage();
const contactUsPage = new ContactUsPage();

const validUser = users[0];
const invalidEmailUser = users[1];
const noCommentUser = users[2];

beforeEach(() => {
    homePage.visitHomePage();
    homePage.clickContactUsButton();
});

describe('Contact Us page tests', () => {
    it('Check the form with valid user data', () => {
        contactUsPage.fillContactUsForm(validUser);
        contactUsPage.clickSumbitButton();

        contactUsPage.getSuccessSubmitMessage().should('be.visible');
    });

    it('Check the form with invalid email data', () => {
        contactUsPage.fillContactUsForm(invalidEmailUser);
        contactUsPage.clickSumbitButton();

        contactUsPage.getInvalidEmailError().should('be.visible');
    });

    it('Check the form with data without comment', () => {
        contactUsPage.fillContactUsForm(noCommentUser);
        contactUsPage.clickSumbitButton();

        contactUsPage.getAllFieldsAreRequiredError().should('be.visible');
    });

    it('Check the form with empty fields', () => {
        contactUsPage.clickSumbitButton();

        contactUsPage.getInvalidEmailError().should('be.visible');
        contactUsPage.getAllFieldsAreRequiredError().should('be.visible');
    });

    it('Check the reset button', () => {
        contactUsPage.fillContactUsForm(noCommentUser);
        contactUsPage.clickResetButon();

        contactUsPage.getFirstName().should('have.value', '');
        contactUsPage.getLastName().should('have.value', '');
        contactUsPage.getEmail().should('have.value', '');
        contactUsPage.getComment().should('have.value', '');
    });

});

// 1- succeses all fields
//  2. Empty fields
// 3. without email
// 4. Reset
// witout comment