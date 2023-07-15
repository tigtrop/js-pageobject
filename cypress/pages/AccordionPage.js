class AccordionPage {
    static visit() {
        cy.visit('http://www.webdriveruniversity.com/Accordion/index.html');
    }

    static get getTitle() {
        return cy.get('div#main-header > h1');
    }

    static get getManualTestingSpoiler() {
        return cy.get('button#manual-testing-accordion');
    }

    static get getManualTestingText() {
        return cy.get('#manual-testing-description');
    }

    static get getCucumberSpoiler() {
        return cy.get('button#cucumber-accordion');
    }

    static get getCucumberText() {
        return cy.get('div#cucumber-testing-description');
    }
    
    static get getAutomationTestingSpoler() {
        return cy.get('button#automation-accordion');
    }

    static get getAutomationTestingText() {
        return cy.get('div#automation-testing-description');
    }

    static get getKeepClickingSpoiler() {
        return cy.get('button#click-accordion');
    }

    static get getKeepClickingText() {
        return cy.get('div#timeout');
    }

    static get getLoadingBlock() {
        return cy.get('p#hidden-text', {timeout : 10000});
    }

    static get getFooter() {
        return cy.get('.row  p');
    }
}

export default AccordionPage;