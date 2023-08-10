import DataPage from "../../pages/DataPage";
import { table1, table3, table3columns } from "../../test-data/tableData";
import formData from "../../test-data/formData.json"
import { badgesTitles, badgesValues } from "../../test-data/badgesData";
import { pagination } from "../../test-data/dataPageData";


class DataStep {
    visit() {
        DataPage.visit();
        cy.url().should('contain', 'Data-Table');
    }

    verifyFirstNameFromTableWithID(id) {
        DataPage.getTable(id).forEach((element, index) => {
            DataPage.getFirstNameColumnIDTable(id, index+1).should('have.html', element.firstname);
        })
    }

    verifyLastNameFromTable(id) {
        DataPage.getTable(id).forEach((element, index) => {
            DataPage.getLastNameColumn(id, index+1).should('have.html', element.lastname);
        })
    }

    verifyAgeFromTable(id) {
        DataPage.getTable(id).forEach((element, index) => {
            DataPage.getAgeColumn(id, index+1).should('have.html', element.age);
        })
    }

    randomFirstName(){
        return formData[Math.floor(Math.random()* formData.length)].first_name;
    }

    randomLastName(){
        return formData[Math.floor(Math.random()* formData.length)].last_name;
    }

    randomText(){
        return formData[Math.floor(Math.random()* formData.length)].text;
    }

    verifyFirstNameField() {
        const name = this.randomFirstName();
        DataPage.getFirstNameField.type(name).should('have.value', name);
    }

    verifyLastNameField() {
        const lastname = this.randomLastName();
        DataPage.getLastNameField.type(lastname).should('have.value', lastname);
    }

    verifyTextField() {
        const text = this.randomText();
        DataPage.getTextField.type(text).should('have.text', text);
    }
    
    verifyForm() {
        this.verifyFirstNameField();
        this.verifyLastNameField();
        this.verifyTextField()
    }

    verifyBreadcrumbsHome() {
        DataPage.getBreadcrumbsHome.should('be.visible').should('have.text', 'Home').click();
        cy.url().should('contain', '#');
    }

    verifyBreadcrumbsAboutUs() {
        DataPage.getBreadcrumbsAboutUs.should('be.visible').should('have.text', 'About Us').click();
        cy.url().should('contain', '#');
    }

    verifyBreadcrumbsContactUs() {
        DataPage.getBreadcrumbsContactUs.should('be.visible').should('have.text', 'Contact Us').and('have.class', 'active');
    }

    verifyBreadcrumbs() {
        this.verifyBreadcrumbsHome();
        this.verifyBreadcrumbsAboutUs();
        this.verifyBreadcrumbsContactUs();
    }

    verifyBadges() {
        badgesTitles.forEach((element, index) => {
            DataPage.getBadgeTitle(index).should('contain', element);
        })
        badgesValues.forEach((element, index) => {
            DataPage.getBadgeValue(index).invoke('text').should('contain', element);
        })   
    }

    verifyPageButtons() {
        pagination.forEach((element, index) => {
            DataPage.getPageButton(index).click().invoke('text').should('contain', element)
            cy.url().should('contain', '#');

        })
    }

    verifyColumnNamesTalbe3() {
        DataPage.getTeble3Header.each(($value, index) =>{
            cy.wrap($value).invoke('text').then($text => {
                cy.wrap($text).should('eq', table3columns[index]);
            })
        })
    }

    verifyIDColumnTable3() {
        DataPage.getIDTable3.each(($value, index) =>{
            cy.wrap($value).invoke('text').then($text => {
                cy.wrap($text).should('contain', table3[index].id);
            })
        })
    }

    verifyNamesColumsTable3() {
        DataPage.getNameColumnFromTable3.each(($value, index) =>{
            cy.wrap($value).invoke('text').then($text => {
                cy.wrap($text).should('contain', table3[index].firstname);
            })
        })
    }

    verifyLastNamesColumnTable3() {
        DataPage.getLastNameColumnFromTable3.each(($value, index) =>{
            cy.wrap($value).invoke('text').then($text => {
                cy.wrap($text).should('contain', table3[index].lastname);
            })
        })
    }

    clickLinkButton() {
        DataPage.getLinkButton.click();
    }

    clickButton() {
        DataPage.getButton.click();
    }

    clickInputButton() {
        DataPage.getInputButton.click();
    }

    clickSubmitButton() {
        DataPage.getSubmitButton.click();
    }

    clickResetButton() {
        DataPage.getResetButton.click();
    }

    clickDangerButton() {
        DataPage.getDangerButton.click();
    }

    clickWarningButton() {
        DataPage.getWarningButton.click();
    }

    clickInfoButton() {
        DataPage.getInfoButton.click();
    }

    clickAlertButton() {
        DataPage.getAlertButton.click();
    }

    clickButton1() {
        DataPage.getButton1.click();
    }

    clicktButton2() {
        DataPage.getButton2.click();
    }

    clickButton3() {
        DataPage.getButton3.click();
    }

    clickButton4() {
        DataPage.getButton4.click();
    }

    verifyLinkButton() {
        this.clickLinkButton();
    }

    verifyButton() {
        this.clickButton();
    }

    verifyInputButton() {
        this.clickInputButton();
    }

    verifySubmitButton() {
        this.clickSubmitButton();
    }

    verifyResetButton() {
        this.clickResetButton();
    }

    verifyDangerButton() {
        this.clickDangerButton();
    }

    verifyWarningButton() {
        this.clickWarningButton();
    }

    verifyInfoButton() {
        this.clickInfoButton();
    }

    verifyAlertButton() {
        this.clickAlertButton();
    }

    verifyButton1() {
        this.clickButton1();
    }

    verifytButton2() {
        this.clickButton2();
    }

    verifyButton3() {
        this.clickButton3();
    }

    verifyButton4() {
        this.clickButton4();
    }
    




















//////////////////////////////////////////////////////////////
    selectColumn(selectorTable, columnName) {
        DataPage.getTableColumnsNames(selectorTable)
        .each(($el, index) => {

            //cy.wrap($el).invoke('text').as('colName')
            
            cy.log(index);
            let colNum = index;
            cy.log(colNum);
            cy.log($el.text())
            if($el.text().includes(columnName)) {
                cy.wrap(index).as('colIndex')
                cy.log(index);
                return false;
            }
            
        //     {
        //         cy.get('@colName').should('eq', columnName).then(()=> {
        //             return index;
        //         })               
        //     } else {
        //         cy.log('No such column');
        //     }
        
        })
    }


///////////////////////////////////// Test

    // verifyFirstNameFromTableUniversal(id) {
    //     DataPage.getTable(id).forEach((element, index) => {
    //         DataPage.getFirstNameColumnIDTable(id, index+1).should('have.html', element.firstname);
    //     })
    // }

    // verifyFirstNameUniversal(selectorTable, columnName, data) {
    //     this.selectColumn(selectorTable, columnName)
    //     //cy.get('@colIndex').then($value => {
    //         //let value = $value
            
    //         table1.forEach(element => {
    //             DataPage.getTestColumnUniversal(1, 1, ).should('have.html', element.firstname);
    //     //})
    //     //cy.log(value);
    // }
    // )}


    verifyColumnValues(selectorTable, columnName, columnIndex, data) {
        this.selectColumn(selectorTable, columnName).as('columnIndex');
        cy.get('@columnIndex').then($value => {
            table1.forEach(element => {
                DataPage.getTestColumn(columnIndex, 0).should('have.html', element.firstname);
        })
    }
    )}

    verifyTableWithID(id) {

    }
}

export default DataStep;