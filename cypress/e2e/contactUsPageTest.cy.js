/// <reference types="Cypress" />
import HomePage from "../pages/HomePage";
import BasePage from "../pages/BasePage";
import OurProductsPage from "../pages/OurProducsPage";
import ContactUsPage from "../pages/ContactUsPage";
import { users } from "../test-data/users"
import { ContactUsStep } from "../cypress/steps/contact-us-step";

const basePage = new BasePage();
const homePage = new HomePage();
const ourProductsPage = new OurProductsPage();
const contactUsPage = new ContactUsPage();
const contactUsStep = new ContactUsStep();

const validUser = users[0];
const invalidEmailUser = users[1];
const noCommentUser = users[2];

beforeEach(() => {
    contactUsStep.visit();
});

describe('Contact Us page tests', () => {
    it('Check the form with valid user data', () => {
        contactUsStep.fillContactUsForm(validUser);
        contactUsStep.clickSumbitButton();
        contactUsStep.verifySucceessMessage();
    });

    it('Check the form with invalid email data', () => {
        contactUsStep.fillContactUsForm(invalidEmailUser);
        contactUsStep.clickSumbitButton();
        contactUsStep.verifyInvalidEmailError();
    });

    it('Check the form with data without comment', () => {
        contactUsStep.fillContactUsForm(noCommentUser);
        contactUsStep.clickSumbitButton();
        contactUsStep.verifyAllFieldsRequiredError();
    });

    it('Check the form with empty fields', () => {
        contactUsStep.clickSumbitButton();
        contactUsStep.verifyInvalidEmailError();
        contactUsStep.verifyAllFieldsRequiredError();
    });

    it('Check the reset button', () => {
        contactUsStep.fillContactUsForm(noCommentUser);
        contactUsStep.clickResetButon();
        contactUsStep.verifyEmptyForm();
    });

});