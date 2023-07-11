import DropdownPage from "../pages/dropdownPage";
import { titles, dropdownId, dropdown1 } from "../test-data/dropdownData";

const dropdown = new DropdownPage();

describe('Dropdown, checkbox, radiobutton tests', () => {
    beforeEach(() => {
        dropdown.visit();
    });

    it('', () => {
        dropdown.getBlockByTitle(titles[0]).should('exist');
        dropdown.getBlockByTitle(titles[1]).should('exist');
        dropdown.getBlockByTitle(titles[2]).should('exist');

        dropdown1.forEach(value =>{
            dropdown.getDropdownById(dropdownId[0]).should('exist').select(dropdown1[value]).invoke('val').should('eq', dropdown1[value]);
        })

        
        // dropdown.getDropdownById(dropdownId[0]).should('exist').select(dropdown1[1]).invoke('val').should('eq', dropdown1[1]);
        // dropdown.getDropdownById(dropdownId[0]).should('exist').select(dropdown1[2]).invoke('val').should('eq', dropdown1[2]);
        // dropdown.getDropdownById(dropdownId[0]).should('exist').select(dropdown1[3]).invoke('val').should('eq', dropdown1[3]);
    });
});