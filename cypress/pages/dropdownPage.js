class DropdownPage{
    static visit(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
    }

    static getBlockByTitle(title){
        return cy.xpath(`//h2[contains(text(), '${title}')]`);
    }

    static getDropdownById(id) {
        return cy.xpath(`//h2[text()='Dropdown Menu(s)']/../div/select[@id='${id}']`);
    }
    static getCheckboxById(id) {
        return cy.xpath(`//input[@value="${id}"]`);
    }

    static getRadioButtonById(id) {
        return cy.xpath(`//input[@value="${id}"]`);
    }

    static getVegetablesRadioButtonsByValue(value) {
        return cy.xpath(`//form[@id='radio-buttons-selected-disabled']/input[@value='${value}']`);
    }

    static get getFruitsDropdown() {
        return cy.xpath(`//select[@id='fruit-selects']`);
    }

    static get getDisabledOption(){
        return this.getFruitsDropdown.find('option[disabled]');
    }
    
}
export default DropdownPage;