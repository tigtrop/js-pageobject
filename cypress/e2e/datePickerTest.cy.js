import DataPickerStep from "../cypress/steps/DatePickerStep";

const datePickerStep = new DataPickerStep();

describe('DatePicker Tests', () => {

    beforeEach(() => {
        datePickerStep.visit();
    });

    it('Select next day', () => {
        datePickerStep.verifyNextDay();
    });

    it('Select next month', () => {
        datePickerStep.verifyNextMonth();
    });

    it('Selext next year', () => {
        datePickerStep.verifyNextYear();
    });

    it('Select random day', () => {
        datePickerStep.verifyRandomDay();
    });

    it('Select random month and day', () => {
        datePickerStep.verifyRandomMonthAndDay();
    });

    it('SelectRandomDate', () => {
        datePickerStep.verifyRandomDate();
    });
});