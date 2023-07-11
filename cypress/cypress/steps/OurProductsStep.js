import OurProductsPage from "../../pages/OurProductsPage";
import { GeneralStep } from "./GeneralStep";

export class OurProductsStep extends GeneralStep {
    visit() {
        OurProductsPage.visit();
        cy.url().should('contain', 'products');
    }

    clickSpecialOffersTitle() {
        OurProductsPage.getSpecialOffersTitle.click();
    }
    
    clickCamerasTitle() {
        OurProductsPage.getCamerasTitle.click();
    }
    
    clickNewLaptopsTitle(){
        OurProductsPage.getNewLaptopsTitle.click();
    }
    
    clickUsedLaptopsTitle(){
        OurProductsPage.getUsedLaptopsTitle.click();
    }
    
    clickGameConsoleTitle(){
        OurProductsPage.getCamerasTitle.click();
    }
    
    clickComponentsTitle(){
        OurProductsPage.getComponentsTitle.click();
    }
    
    clickDesktopSystemsTitle(){
        OurProductsPage.getDesktopSystemsTitle.click();
    }
    
    clickAudioTitle(){
        OurProductsPage.getAudioTitle.click();
    }
    
    clickSpecialOffersImg() {
        OurProductsPage.getSpecialOffersImg.click();
    }
    
    clickCamerasImg() {
        OurProductsPage.getCamerasImg.click();
    }
    
    clickNewLaptopsImg(){
        OurProductsPage.getNewLaptopsTitle.click();
    }
    
    clickUsedLaptopsImg(){
        OurProductsPage.getUsedLaptopsImg.click();
    }
    
    clickGameConsoleImg(){
        OurProductsPage.getCamerasImg.click();
    }
    
    clickComponentsImg(){
        OurProductsPage.getComponentsImg.click();
    }
    
    clickDesktopSystemsImg(){
        OurProductsPage.getDesktopSystemsImg.click();
    }
    
    clickAudioImg(){
        OurProductsPage.getAudioImg.click();
    }
    
    clickProceedButton() {
        OurProductsPage.getProceedModalButton.click();
    }
    
    clickCloseModalButton() {
        OurProductsPage.getCloseModalButton.click();
    }
    
    clickExitModalButton() {
        OurProductsPage.getExitModalButton.click();
    }
    
    clickTitles(x) {
        OurProductsPage.getTitles.eq(x).click();
    }
    
    clickImages(x) {
        OurProductsPage.getImages.eq(x).click();
    }

    checkProceedModalButton(){
        for(let i=0; i<8; i++) {
            this.clickTitles(i);
            OurProductsPage.getSpecialOfferModal.should('be.visible');
            this.clickProceedButton();
            OurProductsPage.getSpecialOfferModal.should('not.be.visible');
        }

        for(let i=0; i<8; i++) {
            this.clickImages(i);
            OurProductsPage.getSpecialOfferModal.should('be.visible');
            this.clickProceedButton();
            OurProductsPage.getSpecialOfferModal.should('not.be.visible');
        }
    }

    checkCloseModalButton() {
        for(let i=0; i<8; i++) {
            this.clickTitles(i);
            OurProductsPage.getSpecialOfferModal.should('be.visible');
            this.clickCloseModalButton();
            OurProductsPage.getSpecialOfferModal.should('not.be.visible');
        }

        for(let i=0; i<8; i++) {
            this.clickImages(i);
            OurProductsPage.getSpecialOfferModal.should('be.visible');
            this.clickCloseModalButton();
            OurProductsPage.getSpecialOfferModal.should('not.be.visible');
        }
    }

    checkExitModalButton() {
        for(let i=0; i<8; i++) {
            this.clickTitles(i);
            OurProductsPage.getSpecialOfferModal.should('be.visible');
            this.clickExitModalButton();
            OurProductsPage.getSpecialOfferModal.should('not.be.visible');
        }

        for(let i=0; i<8; i++) {
            this.clickImages(i);
            OurProductsPage.getSpecialOfferModal.should('be.visible');
            this.clickExitModalButton();
            OurProductsPage.getSpecialOfferModal.should('not.be.visible');
        }
    }

}