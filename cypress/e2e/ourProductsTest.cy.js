/// <reference types="Cypress" />
import HomePage from "../pages/HomePage";
import BasePage from "../pages/BasePage";
import OurProductsPage from "../pages/OurProductsPage";
import ContactUsPage from "../pages/ContactUsPage";
import { OurProductsStep } from "../cypress/steps/OurProductsStep";

const basePage = new BasePage();
const homePage = new HomePage();
const ourProductsPage = new OurProductsPage();
const contactUsPage = new ContactUsPage();
const ourProductsStep = new OurProductsStep();

describe('Our Product page tests', () => {
    beforeEach(() => {
        ourProductsStep.visit();
    });

    it('Check "Proceed" modal button', () => {
        ourProductsStep.checkProceedModalButton();
    });

    it('Check "Close" modal button', () => {
        ourProductsStep.checkCloseModalButton();
    });

    it('Check "Exit" modal button', () => {
        ourProductsStep.checkExitModalButton();
    });


});