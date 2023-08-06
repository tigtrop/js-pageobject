class DatePickerPage {
    static visit() {
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html');
    }

    static get getDatePickerInput() {
        return cy.get('div#datepicker > input');
    }

    static get getSwitchDaysToMonths() {
        return cy.get('.datepicker-days .datepicker-switch');
    }

    static get getSwitchFromMonthToYears() {
        return cy.get('.datepicker-months .datepicker-switch');
    }

    static get getYear() {
        return cy.get('span.year');
    }

    static get getMonth() {
        return cy.get('span.month');
    }

    static getMonthByIndex(index) {
        return cy.get(`span.month:nth-of-type(${index})`);
    }

    static get getCurrentDay() {
        return cy.get('tr>td.today.day');
    }

    static get getDays() {
        return cy.get('tr>td.day');
    }

    static get getMonthDays() {
        return cy.xpath('//tr/td[@class="day"]')
    }

    static get getCurrentMonth() {
        return cy.get('td>span.active.month');
    }

    static get getCurrentYear() {
        return cy.get('td>span.active.year');
    }

    static getYearByIndex(index) {
        return cy.get(`td>span.year:nth-of-type(${index})`);
    }

    static getDayInMonth(elem) {
        //return cy.get('tr>td[class=day]');
        return cy.xpath(`(//tr/td[@class='day'])[${elem}]`)
    }
}

export default DatePickerPage;