import BasePage from "./BasePage";

class HomePage extends BasePage {
    static visit() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html');
    }

    static get getWhoAreWeTitle() {
        return cy.xpath('//p[@class="sub-heading" and contains(text(), "Who Are We?")]');
    }

    static get getWhoAreWeText() {
        return cy.xpath('(//p[contains(text(), "Lorem")])[1]');
    }

    static get getFindOutMoreButton() {
        return cy.get('#button-find-out-more');
    }

    static get getWelcomeToSiteModal() {
        return cy.get('.modal-content');
    }

    static get getFindOutModalButton() {
        return cy.xpath('//button[text()="Find Out More"]');
    }

    static get getCloseModalButton() {
        return cy.xpath('//button[text()="Close"]');
    }

    static get getExitModalButton() {
        return cy.get('[data-dismiss="modal"].close');
    }

    static get getWhyChooseUsTitle() {
        return cy.xpath('//p[@class="sub-heading" and text()="Why Choose Us?"]');
    }

    static get getWhyChooseUsText() {
        return cy.xpath('(//div[@class="caption"]/p[contains(text(), "Lorem")])[3]');
    }

    static get getGreatServiceTitle() {
        return cy.xpath('//p[@class="sub-heading" and text()="GREAT SERVICE!"]');
    }

    static get getGreatServiceRate() {
        return cy.xpath('(//div[@class="div-star"])[1]');
    }

    static get getGreatServiceText() {
        return cy.xpath('(//div[@class="caption"]/p[contains(text(), "Lorem")])[2]');
    }

    static get getExcellentCustomerServiceTitle() {
        return cy.xpath('//p[@class="sub-heading" and text()="Excellent Customer Service!"]');
    }

    static get getExcellentCustomerServiceText() {
        return cy.xpath('(//div[@class="caption"]/p[contains(text(), "Lorem")])[4]');
    }

    static get getExcellentCustomerServiceRate() {
        return cy.xpath('(//div[@class="div-star"])[2]');
    }

    static get getCarouselImage() {
        return cy.get('.carousel-inner');
    }

    static get getCarouselLeftButton() {
        return cy.get('.left.carousel-control');
    }

    static get getCarouselRightButton() {
        return cy.get('.right');
    }

    static get getCarouselFirstImage() {
        return cy.get('[src="../img/amp.svg"]');
    }

    static get getCarouselSecondImage() {
        return cy.get('[src="../img/boombox.svg"]');
    }

    static get getCarouselThirdImage() {
        return cy.get('[src="../img/nintendo.svg"]');
    }

    static get getCarouselDotButton1() {
        return cy.get('[data-slide-to="0"]');
    }

    static get getCarouselDotButton2() {
        return cy.get('[data-slide-to="1"]');
    }

    static get getCarouselDotButton3() {
        return cy.get('[data-slide-to="2"]');
    }

    static getImageDiv(elem) {
        return cy.xpath(`(//div[contains(@class, "item")])[${elem}]`);
    }
}

export default HomePage;