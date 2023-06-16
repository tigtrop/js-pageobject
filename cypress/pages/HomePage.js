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
        return cy.visit('#button-find-out-more');
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

    getGreatServicText() {
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
        return cy.get('.left');
    }

    getCarouselRightButton() {
        return cy.get('.right');
    }

    getCarouselFirstImage() {
        return cy.get('li[data-slide-to]').eq(0);
    }

    getCarouselSecondImage() {
        return cy.get('li[data-slide-to]').eq(1);
    }

    getCarouselThirdImage() {
        return cy.get('li[data-slide-to]').eq(3);
    }

    
    
}

export default HomePage;