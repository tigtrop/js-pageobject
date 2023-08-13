import DataPage from "../../pages/DataPage";
import { table1, table3, table3columns } from "../../test-data/tableData";
import formData from "../../test-data/formData.json"
import { badgesTitles, badgesValues } from "../../test-data/badgesData";
import { divText1, divText2, italicText, markedText, pagination, quoatedText } from "../../test-data/dataPageData";


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
        return DataPage.getLinkButton.click();
    }

    clickButton() {
        return DataPage.getButton.click();
    }

    clickInputButton() {
        return DataPage.getInputButton.click();
    }

    clickSubmitButton() {
        return DataPage.getSubmitButton.click();
    }

    clickResetButton() {
        return DataPage.getResetButton.click();
    }

    clickDangerButton() {
        return DataPage.getDangerButton.click();
    }

    clickWarningButton() {
        return DataPage.getWarningButton.click();
    }

    clickInfoButton() {
        return DataPage.getInfoButton.click();
    }

    clickAlertButton() {
        return DataPage.getAlertButton.click();
    }

    clickButton1() {
        return DataPage.getButton1.click();
    }

    clickButton2() {
        return DataPage.getButton2.click();
    }

    clickButton3() {
        return DataPage.getButton3.click();
    }

    clickButton4() {
        return DataPage.getButton4.click();
    }

    verifyLinkButton() {
        this.clickLinkButton().should('be.visible');
        cy.url().should('contain', '#');
    }

    verifyButton() {
        this.clickButton().should('be.visible');
    }

    verifyInputButton() {
        this.clickInputButton().should('be.visible');
    }

    verifySubmitButton() {
        this.clickSubmitButton().should('be.visible');
    }

    verifyResetButton() {
        this.clickResetButton().should('be.visible');
    }

    verifyDangerButton() {
        this.clickDangerButton().should('be.visible');
    }

    verifyWarningButton() {
        this.clickWarningButton().should('have.class', 'disabled');
    }

    verifyInfoButton() {
        this.clickInfoButton().should('be.visible');
    }

    verifyAlertButton() {
        this.clickAlertButton().should('be.visible');
    }

    verifyButton1() {
        this.clickButton1().should('have.class', 'focus').and('have.class', 'active');
    }

    verifyButton2() {
        this.clickButton2().should('have.class', 'focus');
    }

    verifyButton3() {
        this.clickButton3().should('have.class', 'focus');
    }

    verifyButton4() {
        this.clickButton4().should('have.class', 'focus');
    }

    /////////////////

    verifyTextBlock() {
        DataPage.getRandomTextBlock.should('be.visible')
        .invoke('text').then(text => { 
            expect(text).to.contain(divText1);
            expect(text).to.contain(divText2);
        })

        DataPage.getMarkedText.should('be.visible').and('have.class', 'traversal-mark')
        .invoke('text').then(text => {
            expect(text).to.contain(markedText);
        })

        DataPage.getQuotedText.should('be.visible')
        .invoke('text').then(text => {
            const trimmedText = text.trim();
            const modifiedText = trimmedText.replace(/\s{2,}/g, ' ');
            expect(modifiedText).to.contain(quoatedText);
        })

        DataPage.getItalicText.should('be.visible').and('have.class', 'traversal-cite')
        .invoke('text').then(text => {
            expect(text).to.contain(italicText);
        })
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