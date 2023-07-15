import AccordionPage from "../../pages/AccordionPage";

export class AccordionStep {
    visit() {
        AccordionPage.visit();
        cy.url().should('contain', 'Accordion');
        AccordionPage.getTitle.should('be.visible');
        AccordionPage.getFooter.should('be.visible');
    }

    clickManualTesting() {
        AccordionPage.getManualTestingSpoiler.click();
    }

    clickCucumber() {
        AccordionPage.getCucumberSpoiler.click();
    }

    clickAutomationTesting() {
        AccordionPage.getAutomationTestingSpoler.click();
    }

    clickKeepClicking() {
        AccordionPage.getKeepClickingSpoiler.click();
    }

    verifyTitles() {
        AccordionPage.getManualTestingSpoiler.should('have.html', 'Manual Testing');
        AccordionPage.getCucumberSpoiler.should('have.html', 'Cucumber BDD');
        AccordionPage.getAutomationTestingSpoler.should('have.html', 'Automation Testing');
        AccordionPage.getKeepClickingSpoiler.should('have.html', 'Keep Clicking! - Text will Appear After 5 Seconds!');
        AccordionPage.getTitle.should('have.html', 'Click on One of the Accordian Items Below!');
    }

    verifyManualTesting() {
        this.clickManualTesting();
        AccordionPage.getManualTestingSpoiler.should('have.class', 'active');
        AccordionPage.getManualTestingText.should('have.attr', 'style', 'max-height: 70px;');
        this.clickManualTesting();
        AccordionPage.getManualTestingSpoiler.should('not.have.class', 'active');
        AccordionPage.getManualTestingText.should('have.attr', 'style','');
    }

    verifyCucubmer() {
        this.clickCucumber();
        AccordionPage.getCucumberSpoiler.should('have.class', 'active');
        AccordionPage.getCucumberText.should('have.attr', 'style', 'max-height: 70px;');
        this.clickCucumber();
        AccordionPage.getCucumberSpoiler.should('not.have.class', 'active');
        AccordionPage.getCucumberText.should('have.attr', 'style','');
    }

    verifyAutomationTesting() {
        this.clickAutomationTesting();
        AccordionPage.getAutomationTestingSpoler.should('have.class', 'active');
        AccordionPage.getAutomationTestingText.should('have.attr', 'style', 'max-height: 90px;');
        this.clickAutomationTesting();
        AccordionPage.getAutomationTestingSpoler.should('not.have.class', 'active');
        AccordionPage.getAutomationTestingText.should('have.attr', 'style','');
    }

    verifyKeepClicking() {
        AccordionPage.getLoadingBlock.should('have.html', 'LOADING.. PLEASE WAIT..');
        AccordionPage.getLoadingBlock.should('to.have.html', 'LOADING COMPLETE.');
        this.clickKeepClicking();
        AccordionPage.getKeepClickingSpoiler.should('have.class', 'active');
        AccordionPage.getKeepClickingText.should('have.attr', 'style', 'max-height: 20px;');
        this.clickKeepClicking();
        AccordionPage.getKeepClickingSpoiler.should('not.have.class', 'active');
        AccordionPage.getKeepClickingText.should('have.attr', 'style','');
    }
}