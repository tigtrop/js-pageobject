/// <reference types="Cypress" />
import HomePage from "../pages/HomePage";
import BasePage from "../pages/BasePage";
import OurProductsPage from "../pages/OurProducsPage";
import ContactUsPage from "../pages/ContactUsPage";

const basePage = new BasePage();
const homePage = new HomePage();
const ourProductsPage = new OurProductsPage();
const contactUsPage = new ContactUsPage();

describe('Home page testing', () => {
    beforeEach(() => {
        homePage.visitHomePage();
    });

    it('Check the carousel left and right buttons', () => {
        homePage.getCarouselDotButton1().should('have.class','active');
        homePage.getCarouselFirstImage().should('be.visible');

        homePage.clickRightCarouselButton();

        homePage.getCarouselDotButton2().should('have.class','active');
        homePage.getCarouselSecondImage().should('be.visible');

        homePage.clickRightCarouselButton();

        homePage.getCarouselDotButton3().should('have.class','active');
        homePage.getCarouselThirdImage().should('be.visible');

        homePage.clickRightCarouselButton();

        homePage.getCarouselDotButton1().should('have.class','active');
        homePage.getCarouselFirstImage().should('be.visible');

        homePage.clickLeftCarouselButton();

        homePage.getCarouselDotButton3().should('have.class','active');
        homePage.getCarouselThirdImage().should('be.visible');

        homePage.clickLeftCarouselButton();

        homePage.getCarouselDotButton2().should('have.class','active');
        homePage.getCarouselSecondImage().should('be.visible');

        homePage.clickLeftCarouselButton();

        homePage.getCarouselDotButton1().should('have.class','active');
        homePage.getCarouselFirstImage().should('be.visible');
    });

    it('Check that dot buttons are clickable', () => {
        homePage.getCarouselDotButton1().should('have.class','active');
        homePage.getCarouselFirstImage().should('be.visible');

        homePage.clickCarouselDotButton2();

        homePage.getCarouselDotButton2().should('have.class','active');
        homePage.getCarouselSecondImage().should('be.visible');

        homePage.clickCarouselDotButton3();

        homePage.getCarouselDotButton3().should('have.class','active');
        homePage.getCarouselThirdImage().should('be.visible');

        homePage.clickCarouselDotButton1();

        homePage.getCarouselDotButton1().should('have.class','active');
        homePage.getCarouselFirstImage().should('be.visible');
    });
    
    it('Check navigation menu buttons', () => {
        homePage.clickOurProductsButton();

        ourProductsPage.getCategories().should('have.length', '8')

        ourProductsPage.clickHomeButton();

        homePage.getCarouselFirstImage().should('be.visible');

        homePage.clickContactUsButton();

        contactUsPage.getContactUsHeader().should('be.visible');

        cy.go('back');

        homePage.getCarouselFirstImage().should('be.visible');
      
    });

    it('Check "Find Out More" modal', () => {
        homePage.clickFindOutMoreButton();
        homePage.getWelcomeToSiteModal().should('be.visible');

        homePage.clickFindOutMoreModalButton();
        homePage.getWelcomeToSiteModal().should('not.be.visible');

        homePage.clickFindOutMoreButton();
        homePage.getWelcomeToSiteModal().should('be.visible');

        homePage.clickCloseModalButton();
        homePage.getWelcomeToSiteModal().should('not.be.visible');

        homePage.clickFindOutMoreButton();
        homePage.getWelcomeToSiteModal().should('be.visible');

        homePage.clickExitModalButton();
        homePage.getWelcomeToSiteModal().should('not.be.visible');
    });

    it('Check the blocks are visible', () => {
        homePage.getWhoAreWeTitle().should('be.visible');
        homePage.getWhoAreWeText().should('be.visible');
        homePage.getWhyChooseUsTitle().should('be.visible');
        homePage.getWhyChooseUsText().should('be.visible');
        homePage.getGreatServiceTitle().should('be.visible');
        homePage.getGreatServiceText().should('be.visible');
        homePage.getGreatServiceRate().should('be.visible');
        homePage.getExcellentCustomerServiceTitle().should('be.visible');
        homePage.getExcellentCustomerServiceText().should('be.visible');
        homePage.getExcellentCustomerServiceRate().should('be.visible');
        basePage.getFooter().should('be.visible');
    });
});