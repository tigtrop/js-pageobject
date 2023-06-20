/// <reference types="Cypress" />
import HomePage from "../pages/HomePage";
import BasePage from "../pages/BasePage";
import OurProductsPage from "../pages/OurProducsPage";
import ContactUsPage from "../pages/ContactUsPage";

const basePage = new BasePage();
const homePage = new HomePage();
const ourProductsPage = new OurProductsPage();
const contactUsPage = new ContactUsPage();

describe('Our Product page tests', () => {
    beforeEach(() => {
        homePage.visitHomePage();
        homePage.clickOurProductsButton();
    });

    it('Check "Proceed" modal button', () => {
        for(let i=0; i<8; i++) {
            ourProductsPage.clickTitles(i);
            ourProductsPage.getSpecialOfferModal().should('be.visible');
            ourProductsPage.clickProceedButton();
            ourProductsPage.getSpecialOfferModal().should('not.be.visible');
        }

        for(let i=0; i<8; i++) {
            ourProductsPage.clickImages(i);
            ourProductsPage.getSpecialOfferModal().should('be.visible');
            ourProductsPage.clickProceedButton();
            ourProductsPage.getSpecialOfferModal().should('not.be.visible');
        }
    });

    it('Check "Close" modal button', () => {
        for(let i=0; i<8; i++) {
            ourProductsPage.clickTitles(i);
            ourProductsPage.getSpecialOfferModal().should('be.visible');
            ourProductsPage.clickCloseModalButton();
            ourProductsPage.getSpecialOfferModal().should('not.be.visible');
        }

        for(let i=0; i<8; i++) {
            ourProductsPage.clickImages(i);
            ourProductsPage.getSpecialOfferModal().should('be.visible');
            ourProductsPage.clickCloseModalButton();
            ourProductsPage.getSpecialOfferModal().should('not.be.visible');
        }
    });

    it('Check "Exit" modal button', () => {
        for(let i=0; i<8; i++) {
            ourProductsPage.clickTitles(i);
            ourProductsPage.getSpecialOfferModal().should('be.visible');
            ourProductsPage.clickExitModalButton();
            ourProductsPage.getSpecialOfferModal().should('not.be.visible');
        }

        for(let i=0; i<8; i++) {
            ourProductsPage.clickImages(i);
            ourProductsPage.getSpecialOfferModal().should('be.visible');
            ourProductsPage.clickExitModalButton();
            ourProductsPage.getSpecialOfferModal().should('not.be.visible');
        }
    });


});