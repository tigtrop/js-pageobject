import HomePage from "../../pages/HomePage";
import { GeneralStep } from "./GeneralStep";

export class HomePageStep extends GeneralStep{
    visit() {
        HomePage.visit();
        cy.url().should('contain', 'index');
    }
    
    clickLeftCarouselButton() {
        HomePage.getCarouselLeftButton.click();
    }
    
    clickRightCarouselButton() {
        HomePage.getCarouselRightButton.click();
    }

    clickCarouselDotButton1() {
        HomePage.getCarouselDotButton1.click();
    }

    clickCarouselDotButton2() {
        HomePage.getCarouselDotButton2.click();
    }

    clickCarouselDotButton3() {
        HomePage.getCarouselDotButton3.click();
    }

    clickFindOutMoreButton() {
        HomePage.getFindOutMoreButton.click();
        HomePage.getWelcomeToSiteModal.should('be.visible');
    }

    clickFindOutMoreModalButton() {
        HomePage.getFindOutModalButton.click();
        HomePage.getWelcomeToSiteModal.should('not.be.visible');
    }

    clickCloseModalButton() {
        HomePage.getCloseModalButton.click();
        HomePage.getWelcomeToSiteModal.should('not.be.visible');
    }

    clickExitModalButton() {
        HomePage.getExitModalButton.click();
        HomePage.getWelcomeToSiteModal.should('not.be.visible');
    }

    verifyLeftAndRightCarouselButtons() {
        HomePage.getCarouselDotButton1.should('have.class','active');
        HomePage.getCarouselFirstImage.should('be.visible');
        HomePage.getImageDiv(1).should('have.class','active');

        this.clickRightCarouselButton();

        HomePage.getCarouselDotButton2.should('have.class','active');
        HomePage.getCarouselSecondImage.should('be.visible');
        HomePage.getImageDiv(2).should('have.class','active');

        this.clickRightCarouselButton();

        HomePage.getCarouselDotButton3.should('have.class','active');
        HomePage.getCarouselThirdImage.should('be.visible');
        HomePage.getImageDiv(3).should('have.class','active');

        this.clickRightCarouselButton();

        HomePage.getCarouselDotButton1.should('have.class','active');
        HomePage.getCarouselFirstImage.should('be.visible');
        HomePage.getImageDiv(1).should('have.class','active');

        this.clickLeftCarouselButton();

        //HomePage.getCarouselDotButton3.should('have.class','active');
        HomePage.getCarouselThirdImage.should('be.visible');
        HomePage.getImageDiv(3).should('have.class','active');

        this.clickLeftCarouselButton();

        //HomePage.getCarouselDotButton2.should('have.class','active');
        HomePage.getCarouselSecondImage.should('be.visible');
        HomePage.getImageDiv(2).should('have.class','active');

        this.clickLeftCarouselButton();

        HomePage.getCarouselDotButton1.should('have.class','active');
        HomePage.getCarouselFirstImage.should('be.visible');
        HomePage.getImageDiv(1).should('have.class','active');
    }

    verifyDotCarouselButtons() {
        HomePage.getCarouselDotButton1.should('have.class','active');
        HomePage.getCarouselFirstImage.should('be.visible');

        this.clickCarouselDotButton2();

        HomePage.getCarouselDotButton2.should('have.class','active');
        HomePage.getCarouselSecondImage.should('be.visible');

        this.clickCarouselDotButton3();

        HomePage.getCarouselDotButton3.should('have.class','active');
        HomePage.getCarouselThirdImage.should('be.visible');

        this.clickCarouselDotButton1();

        HomePage.getCarouselDotButton1.should('have.class','active');
        HomePage.getCarouselFirstImage.should('be.visible');
    }

    verifyCarouselFirstImage() {
        HomePage.getCarouselFirstImage.should('be.visible');
    }

    verifyElements() {
        HomePage.getWhoAreWeTitle.should('be.visible');
        HomePage.getWhoAreWeText.should('be.visible');
        HomePage.getWhyChooseUsTitle.should('be.visible');
        HomePage.getWhyChooseUsText.should('be.visible');
        HomePage.getGreatServiceTitle.should('be.visible');
        HomePage.getGreatServiceText.should('be.visible');
        HomePage.getGreatServiceRate.should('be.visible');
        HomePage.getExcellentCustomerServiceTitle.should('be.visible');
        HomePage.getExcellentCustomerServiceText.should('be.visible');
        HomePage.getExcellentCustomerServiceRate.should('be.visible');
    }
}