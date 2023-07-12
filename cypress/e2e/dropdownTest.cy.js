import DropdownPage from "../pages/dropdownPage";
import { titles, dropdownId, dropdown1, dropdown2, dropdown3 } from "../test-data/dropdownData";
import { DropdownStep } from "../cypress/steps/DropdownStep";

const dropdownStep = new DropdownStep;

describe('Dropdown, checkbox, radiobutton tests', () => {
    beforeEach(() => {
        dropdownStep.visit();
    });

    it('Verify dropdowns', () => {
        dropdownStep.verifyDropdownTitle();
        dropdownStep.verifyDropdowns(dropdown1, 0);
        dropdownStep.verifyDropdowns(dropdown2, 1);
        dropdownStep.verifyDropdowns(dropdown3, 2);
    });

    it('Verify checkboxes', () => {
        dropdownStep.verifyCheckboxTitle();
        dropdownStep.selectCheckbox();
    });

    it('Verify radio buttons', () => {
        dropdownStep.verifyRadioButtonTitle();
        dropdownStep.verifyRadioButtonsNotChecked();
        dropdownStep.verifyAllRadioButtonsCheck();
    });
         
});