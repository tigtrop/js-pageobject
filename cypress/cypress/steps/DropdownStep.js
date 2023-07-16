import DropdownPage from "../../pages/dropdownPage";
import { checkboxes, dropdown1, dropdown2, dropdown3, dropdownId, fruitsDropdown, radioButtons, titles, vegesRadioButtons } from "../../test-data/dropdownData";

export class DropdownStep {
    visit() {
        DropdownPage.visit();
        cy.url().should('contain', 'Dropdown')
    }

    verifyDropdownTitle() {
        DropdownPage.getBlockByTitle(titles[0]).should('exist');   
    }

    verifyCheckboxTitle() {
        DropdownPage.getBlockByTitle(titles[1]).should('exist');
    }

    verifyRadioButtonTitle() {
        DropdownPage.getBlockByTitle(titles[2]).should('exist');
    }

    verifyDropdowns(dropdown, num) {
        dropdown.forEach(value =>{
            DropdownPage.getDropdownById(dropdownId[num]).should('exist').select(value).invoke('val').should('eq', value);
        })
    }

    selectCheckbox() {
        checkboxes.forEach(value =>{
            DropdownPage.getCheckboxById(value).should('exist').check().should('be.checked');
        })
        checkboxes.forEach(value =>{
            DropdownPage.getCheckboxById(value).should('be.checked');
        })
    }

    verifyRadioButtonsNotChecked() {
        radioButtons.forEach(value =>{
            DropdownPage.getRadioButtonById(value).should('exist').should('not.be.checked');
        })
    }

    verifyRadioButtonCheck(num) {
        DropdownPage.getRadioButtonById(radioButtons[num]).check().should('be.checked');
        for(let i = 0; i<radioButtons.length; i++) {
            if(i===num){
                continue;
            }else {
                DropdownPage.getRadioButtonById(radioButtons[i]).should('not.be.checked');
            }
        }
    }

    verifyAllRadioButtonsCheck() {
        this.verifyRadioButtonCheck(0);
        this.verifyRadioButtonCheck(1);
        this.verifyRadioButtonCheck(2);
        this.verifyRadioButtonCheck(3);
        this.verifyRadioButtonCheck(4);
    }

    verifyVegesRadioButtons() {
        DropdownPage.getVegetablesRadioButtonsByValue(vegesRadioButtons[0]).click().should('be.checked');
        DropdownPage.getVegetablesRadioButtonsByValue(vegesRadioButtons[1]).should('be.disabled');
        DropdownPage.getVegetablesRadioButtonsByValue(vegesRadioButtons[2]).click().should('be.checked');
        DropdownPage.getVegetablesRadioButtonsByValue(vegesRadioButtons[0]).should('not.be.checked');
    }

    verifyFruitsDropdown(){
        DropdownPage.getFruitsDropdown.select(fruitsDropdown[0]).invoke('val').should('eq', fruitsDropdown[0]);
        DropdownPage.getDisabledOption.should('be.disabled');
        DropdownPage.getFruitsDropdown.select(fruitsDropdown[2]).invoke('val').should('eq', fruitsDropdown[2]);
        DropdownPage.getFruitsDropdown.select(fruitsDropdown[3]).invoke('val').should('eq', fruitsDropdown[3]);
    }
}