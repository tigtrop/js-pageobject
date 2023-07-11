import HomePage from "../pages/HomePage";
import BasePage from "../pages/BasePage";
import OurProductsPage from "../pages/OurProductsPage";
import ContactUsPage from "../pages/ContactUsPage";
import { HomePageStep } from "../cypress/steps/homePageStep";
import { GeneralStep } from "../cypress/steps/GeneralStep";
import { OurProductsStep } from "../cypress/steps/OurProductsStep";

const basePage = new BasePage();
const homePage = new HomePage();
const ourProductsPage = new OurProductsPage();
const contactUsPage = new ContactUsPage();
const homePageStep = new HomePageStep();
const ourProductsStep = new OurProductsStep();

describe('Home page testing', () => {
    beforeEach(() => {
        homePageStep.visit();
    });

    it('Check the carousel left and right buttons', () => {
        homePageStep.verifyLeftAndRightCarouselButtons();
    });

    it('Check that dot buttons are clickable', () => {
        homePageStep.verifyDotCarouselButtons();
    });
    
    it('Check navigation menu buttons', () => {
        homePageStep.clickOurProductsButton();
        ourProductsStep.clickHomeButton();        
        homePageStep.clickContactUsButton();
        cy.go('back');
        homePageStep.verifyHomePageLink();
    });

    it('Check "Find Out More" modal', () => {
        homePageStep.clickFindOutMoreButton();
        
        homePageStep.clickFindOutMoreModalButton();

        homePageStep.clickFindOutMoreButton();

        homePageStep.clickCloseModalButton();

        homePageStep.clickFindOutMoreButton();

        homePageStep.clickExitModalButton();
        
    });

    it('Check the blocks are visible', () => {
        homePageStep.verifyElements()
    });
});