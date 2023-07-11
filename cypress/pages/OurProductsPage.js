import BasePage from "./BasePage";

class OurProductsPage extends BasePage {
    static visit() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
    }

    static get getCategories() {
        return cy.get('.thumbnail');
    }

    static get getSpecialOffersTile() {
        return cy.get('#container-special-offers');
    }

    static get getCamerasTile() {
        return cy.get('#container-product1');
    }

    static get getNewLaptopsTile() {
        return cy.get('#container-product2');
    }

    static get getUsedLaptopsTile() {
        return cy.get('#container-product3');
    }

    static get getGamesConsolesTile() {
        return cy.get('#container-product4');
    }

    static get getComponentsTile() {
        return cy.get('#container-product5');
    }

    static get getDesktopSystemsTile() {
        return cy.get('#container-product6');
    }

    static get getAudioTile() {
        return cy.get('#container-product7');
    }
    
//////////////// Titles

static get getSpecialOffersTitle() {
    this.getSpecialOffersTile().contains('Special Offers');
}

static get getCamerasTitle() {
    this.getCamerasTile().contains('Cameras');
}

static get getNewLaptopsTitle() {
    this.getNewLaptopsTile.contains('New Laptops');
}

static get getUsedLaptopsTitle() {
    this.getUsedLaptopsTile.contains('Used Laptops');
}

static get getGamesConsolesTitle() {
    this.getGamesConsolesTile.contains('Game Consoles');
}

static get getComponentsTitle() {
    this.getComponentsTile.contains('Components');
}

static get getDesktopSystemsTitle() {
    this.getDesktopSystemsTile.contains('Desktop Systems');
}

static get getAudioTitle() {
    this.getAudioTile.contains('Audio');
}

/////////////////////////// Images

static get getSpecialOffersImg() {
    return cy.get('[src="../img/amp.svg"]');
}

static get getCamerasImg() {
    return cy.get('[src="../img/camera.svg"]');
}

static get getNewLaptopsImg() {
    return cy.get('[src="../img/laptop1.svg"]');
}

static get getUsedLaptopsImg() {
    return cy.get('[src="../img/laptop2.svg"]');
}

static get getGamesConsolesImg() {
    return cy.get('[src="../img/nintendo.svg"]');
}

static get getComponentsImg() {
    return cy.get('[src="../img/cards.svg"]');
}

static get getDesktopSystemsImg() {
    return cy.get('[src="../img/computer.svg"]');
}

static get getAudioImg() {
    return cy.get('[src="../img/boombox.svg"]');
}

////////////////// Modal

static get getSpecialOfferModal() {
    return cy.get('.modal-content');
}

static get getProceedModalButton() {
    return cy.xpath('//button[text()="Proceed"]');
}

static get getCloseModalButton() {
    return cy.xpath('//button[text()="Close"]')
}

static get getExitModalButton() {
    return cy.get('[data-dismiss="modal"].close');
}

static get getTitles() {
    return cy.get('.sub-heading');
}

static get getImages() {
    return cy.get('.caption');
}

}

export default OurProductsPage;