import { AccordionStep } from "../cypress/steps/AccordionStep";

const accordionStep = new AccordionStep;

describe('Accordion tests', () => {
    beforeEach(() => {
        accordionStep.visit();
    });

    it('Verify titles', () => {
        accordionStep.verifyTitles();
    });

    it('Verify the accordion page', () => {
        accordionStep.verifyManualTesting();
        accordionStep.verifyCucubmer();
        accordionStep.verifyAutomationTesting();
        accordionStep.verifyKeepClicking();
    });
});