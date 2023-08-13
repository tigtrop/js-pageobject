import DataStep from "../cypress/steps/DataStep";

const dataStep = new DataStep;

describe('Data table test', () => {

    beforeEach(() => {
        dataStep.visit();
    });

    it('Verify First Name column from table 1', () => {
        dataStep.verifyFirstNameFromTableWithID('t01');
    });

    it('Verify First Name column from table 2', () => {
        dataStep.verifyFirstNameFromTableWithID('t02');
    });

    it('Verify Last Name column from table 1', () => {
        dataStep.verifyLastNameFromTable('t01');
    });

    it('Verify Last Name column from table 2', () => {
        dataStep.verifyLastNameFromTable('t02');
    });

    it('Verify Age column from table 1', () => {
        dataStep.verifyAgeFromTable('t01');
    });

    it('Verify Age column from table 2', () => {
        dataStep.verifyAgeFromTable('t02');
    });

    it('Verify form', () => {
        dataStep.verifyForm();
    });

    it('Verify breadcrumbs', () => {
        dataStep.verifyBreadcrumbs();
    });

    it('Verify badges', () => {
        dataStep.verifyBadges();
    });

    it('Verify page buttons', () => {
        dataStep.verifyPageButtons();
    });

    it('Verify column names from talbe 3', () => {
        dataStep.verifyColumnNamesTalbe3();
    });

    it('Verify table 3 values', () => {
        dataStep.verifyIDColumnTable3();
        dataStep.verifyNamesColumsTable3();
        dataStep.verifyLastNamesColumnTable3();
    });

    it('Verify different buttons', () => {
        dataStep.verifyLinkButton();
        dataStep.verifyButton();
        dataStep.verifyInputButton();
        dataStep.verifySubmitButton();
        dataStep.verifyResetButton();
        dataStep.verifyDangerButton();
        dataStep.verifyWarningButton();
        dataStep.verifyInfoButton();
        dataStep.verifyAlertButton();
        dataStep.verifyButton1();
        dataStep.verifyButton2();
        dataStep.verifyButton3();
        dataStep.verifyButton4();
    });

    it('Random text test', () => {
        dataStep.verifyTextBlock();
    });

    it('Lists test', () => {
        dataStep.verifyListTitle();
        dataStep.verifyDrinksList();
        dataStep.verifyFritsList();
        dataStep.verifyVegesList();
        dataStep.verifyJobsList();
    });
});