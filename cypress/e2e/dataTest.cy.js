import DataStep from "../cypress/steps/DataStep";

const dataStep = new DataStep;

describe('Data table test', () => {

    beforeEach(() => {
        dataStep.visit();
    });

    // it('Verify First Name column from table 1', () => {
    //     dataStep.verifyFirstNameFromTableWithID('t01');
    // });

    // it('Verify First Name column from table 2', () => {
    //     dataStep.verifyFirstNameFromTable('t02');
    // });

    // it('Verify Last Name column from table 1', () => {
    //     dataStep.verifyLastNameFromTable('t01');
    // });

    // it('Verify Last Name column from table 2', () => {
    //     dataStep.verifyLastNameFromTable('t02');
    // });

    // it('Verify Age column from table 1', () => {
    //     dataStep.verifyAgeFromTable('t01');
    // });

    // it('Verify Age column from table 2', () => {
    //     dataStep.verifyAgeFromTable('t02');
    // });

    // it('Verify form', () => {
    //     dataStep.verifyForm();
    // });

    // it('Verify breadcrumbs', () => {
    //     dataStep.verifyBreadcrumbs();
    // });

    // it('Verify badges', () => {
    //     dataStep.verifyBadges();
    // });

    // it('Verify page buttons', () => {
    //     dataStep.verifyPageButtons();
    // });

    

});