class BasePage {

    getOurProductsButton() {
        return cy.get('a[href="products.html"]');
    }

    getContactUsButton() {
        return cy.get('a[href="../Contact-Us/contactus.html"]');
    }
    
    getHomeButton() {
        return cy.get('a[href="index.html"]');
    }

    getFooter() {
        return cy.get('footer p');
    }

    clickHomeButton(){
        this.getHomeButton().click();
    }
}

export default BasePage;