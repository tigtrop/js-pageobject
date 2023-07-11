class DropdownPage{
    visit(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
    }

    getBlockByTitle(title){
        return cy.xpath(`//h2[contains(text(), '${title}')]`);
    }

    getDropdownById(id) {
        return cy.xpath(`//h2[text()='Dropdown Menu(s)']/../div/select[@id='${id}']`);
    }
    
}
export default DropdownPage;