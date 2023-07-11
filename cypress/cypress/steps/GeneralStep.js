import BasePage from "../../pages/BasePage";
import ContactUsPage from "../../pages/ContactUsPage";
import OurProductsPage from "../../pages/OurProductsPage";

export class GeneralStep {
    clickHomeButton(){
        BasePage.getHomeButton.click();
        cy.url().should('contain', 'index');
    }

    clickOurProductsButton() {
        BasePage.getOurProductsButton.click();
        cy.url().should('contain', 'products');
        OurProductsPage.getCategories.should('have.length', '8')
    }

    clickContactUsButton() {
        BasePage.getContactUsButton.click();
        cy.url().should('contain', 'contactus');
        ContactUsPage.getContactUsHeader.should('be.visible');
    }

    verifyHomePageLink() {
        cy.url().should('contain', 'index');
    }
}