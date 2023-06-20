import BasePage from "./BasePage";

class HomePage extends BasePage {
    visitHomePage() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html');
    }

    getWhoAreWeTitle() {
        return cy.get('.sub-heading').contains('Who Are We?');
    }

    getWhoAreWeText() {
        return cy.get('.caption p').contains('Lorem ipsum');
    }

    getFindOutMoreButton() {
        return cy.get('#button-find-out-more');
    }

    getWelcomeToSiteModal() {
        return cy.get('.modal-content');
    }

    getFindOutModalButton() {
        return cy.get('[data-dismiss="modal"]').contains('Find Out More');
    }

    getCloseModalButton() {
        return cy.get('[data-dismiss="modal"]').contains('Close');
    }

    getExitModalButton() {
        return cy.get('[data-dismiss="modal"].close');
    }

    getWhyChooseUsTitle() {
        return cy.get('.sub-heading').contains('Why Choose Us?');
    }

    getWhyChooseUsText() {
        return cy.get('.caption p').contains('Lorem ipsum');
    }

    getGreatServiceTitle() {
        return cy.get('.sub-heading').contains('GREAT SERVICE!');
    }

    getGreatServiceRate() {
        return cy.get('.div-star').eq(0);
    }

    getGreatServiceText() {
        return cy.get('.caption p').contains('Lorem ipsum');
    }

    getExcellentCustomerServiceTitle() {
        return cy.get('.sub-heading').contains('Excellent Customer Service!');
    }

    getExcellentCustomerServiceText() {
        return cy.get('.caption p').contains('Lorem ipsum');
    }

    getExcellentCustomerServiceRate() {
        return cy.get('.div-star').eq(1);
    }

    getCarouselImage() {
        return cy.get('.carousel-inner');
    }

    getCarouselLeftButton() {
        return cy.get('.left.carousel-control');
    }

    getCarouselRightButton() {
        return cy.get('.right');
    }

    getCarouselFirstImage() {
        return cy.get('[src="../img/amp.svg"]');
    }

    getCarouselSecondImage() {
        return cy.get('[src="../img/boombox.svg"]');
    }

    getCarouselThirdImage() {
        return cy.get('[src="../img/nintendo.svg"]');
    }

    getCarouselDotButton1() {
        return cy.get('[data-slide-to="0"]');
    }

    getCarouselDotButton2() {
        return cy.get('[data-slide-to="1"]');
    }

    getCarouselDotButton3() {
        return cy.get('[data-slide-to="2"]');
    }

    ///////////// Methods

    clickLeftCarouselButton() {
        this.getCarouselLeftButton().wait(1000).click();
    }
    
    clickRightCarouselButton() {
        this.getCarouselRightButton().wait(1000).click();
    }

    clickCarouselDotButton1() {
        this.getCarouselDotButton1().wait(1000).click();
    }

    clickCarouselDotButton2() {
        this.getCarouselDotButton2().wait(1000).click();
    }

    clickCarouselDotButton3() {
        this.getCarouselDotButton3().wait(1000).click();
    }

    clickFindOutMoreButton() {
        this.getFindOutMoreButton().click();
    }

    clickFindOutMoreModalButton() {
        this.getFindOutModalButton().click();
    }

    clickCloseModalButton() {
        this.getCloseModalButton().click();
    }

    clickExitModalButton() {
        this.getExitModalButton().click();
    }
}

export default HomePage;