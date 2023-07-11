class BasePage {

    static get getOurProductsButton() {
        return cy.get('a[href="products.html"]');
    }

    static get getContactUsButton() {
        return cy.get('a[href="../Contact-Us/contactus.html"]');
    }
    
    static get getHomeButton() {
        return cy.get('a[href="index.html"]');
    }

    static get getFooter() {
        return cy.get('footer p');
    }

}

export default BasePage;