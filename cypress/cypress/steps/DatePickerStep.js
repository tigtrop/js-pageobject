import dayjs from "dayjs";
import DatePickerPage from "../../pages/DatePickerPage";

class DataPickerStep {

    visit() {
        DatePickerPage.visit();
        cy.url().should('contain', 'Datepicker');
        //this.checkCurrentDay();
    }

    clickDatePicker() {
        DatePickerPage.getDatePickerInput.click()
    }

    clickSwithToMonth() {
        DatePickerPage.getSwitchDaysToMonths.click();
    }

    clickSwitchToYear() {
        DatePickerPage.getSwitchFromMonthToYears.click();
    }

    clickMonthByIndex(index) {
        DatePickerPage.getMonthByIndex(index).click();
    }

    clickDayByIndex(index) {
        DatePickerPage.getDayInMonth(index).click();
    }
    
    clickYearByIndex(index) {
        DatePickerPage.getYearByIndex(index).click();
    }

    checkCurrentDay() {
        let currentDate = dayjs().format('MM-DD-YYYY');
        DatePickerPage.getDatePickerInput.invoke('val').then($val => {
            cy.wrap($val).should('eq', currentDate);
        })
    }

    checkSomeDate(addDay, addMonth, addYear) {
        let target
        if (addDay && addMonth && addYear) {
            target = dayjs().add(addMonth, 'month').add(addDay, 'day').add(addYear, 'year').format('MM-DD-YYYY');
        } 
        else if (addDay && addMonth){
            target = dayjs().add(addMonth, 'month').add(addDay, 'day').format('MM-DD-YYYY');
        }
        else if (addMonth && addYear){
            target = dayjs().add(addMonth, 'month').add(addYear, 'year').format('MM-DD-YYYY');
        }
        else if (addDay && addYear) {
            target = dayjs().add(addDay, 'day').add(addYear, 'year').format('MM-DD-YYYY');
        } 
        else if(addMonth){
            target = dayjs().add(addMonth, 'months').format('MM-DD-YYYY');
        }
        else if(addYear){
            target = dayjs().format('MM-DD-YYYY');
        }
        else if(addDay){
            target = dayjs().add(addDay, 'day').format('MM-DD-YYYY');
        }

        DatePickerPage.getDatePickerInput.invoke('val').then($val => {
            cy.wrap($val).should('eq', target);
        })
    }

    verifyNextDay() {
        this.clickDatePicker();
        DatePickerPage.getCurrentDay.invoke('text').as('currentDayNumber');
        cy.get('@currentDayNumber').then($val => {
            // let target = $val.match(/\d+/);
            // target++
            DatePickerPage.getDayInMonth($val).click();
        })
        this.checkSomeDate(1);
    }

    verifyNextMonth() {
        this.clickDatePicker();
        this.clickSwithToMonth();
        let monthID;
        let run = true;
        DatePickerPage.getCurrentMonth.invoke('text').as('currentMonth');
        DatePickerPage.getMonth.each(($value, index) => {
        cy.then(() => {
            if (run === false) return ;
                cy.wrap($value).invoke('text').then($text => {
                    cy.get('@currentMonth').then($currentMonth => {     
                        if ($text === $currentMonth) {
                            monthID = index;
                            this.clickMonthByIndex(monthID+2);
                            run = false;
                        }                      
                    })
                })
        })        
            
                
            
        })
        this.clickDayByIndex(dayjs().format('DD'));
        this.checkSomeDate('', 1)
    }

    verifyNextYear() {
        this.clickDatePicker();
        this.clickSwithToMonth();
        this.clickSwitchToYear();
        let yearID;
        let run = true;
        DatePickerPage.getCurrentYear.invoke('text').as('currentYearNumber');
        DatePickerPage.getYear.each(($value, index) => {
            cy.then(() => {
                if(run === false) return false;
                cy.wrap($value).invoke('text').then($text => {
                    cy.log($text);
                    
                    cy.get('@currentYearNumber').then($currentYearNumber => {
                        cy.log($currentYearNumber);
                        if ($text === $currentYearNumber) {
                            yearID = index;
                            this.clickYearByIndex(yearID+2);
                            run = false; 
                        } 
                    })
                })
            })
            
        })
        
        this.checkSomeDate('','', 1);
    }

    verifyRandomDay() {
        this.clickDatePicker();
        this.clickRandomDay();
    }

    clickRandomDay() {
        DatePickerPage.getMonthDays.then(elm => {
            //cy.log(elm.length);
            let randomDay = Math.floor(Math.random() * elm.length);
            if(randomDay == 0) {
                randomDay++
            }
            this.clickDayByIndex(randomDay);
        })
        this.verifyDateIsSelected();
    }

    verifyDateIsSelected() {
        DatePickerPage.getDatePickerInput.should('not.eq', '');
        DatePickerPage.getDays.should('not.exist');
        DatePickerPage.getMonth.should('not.exist');
        DatePickerPage.getYear.should('not.exist');
    }

    verifyRandomMonthAndDay() {
        this.clickDatePicker();
        this.clickSwithToMonth();
        this.clickRandomMonth();
        this.clickRandomDay();
    }

    clickRandomMonth() {
        DatePickerPage.getMonth.then(elm => {
            //cy.log(elm.length);
            let randomMonth = Math.floor(Math.random() * elm.length);
            if(randomMonth == 0) {
                randomMonth++
            }
            this.clickMonthByIndex(randomMonth);
        })
    }

    verifyRandomDate() {
        this.clickDatePicker();
        this.clickSwithToMonth();
        this.clickSwitchToYear();
        this.clickRandomYear();
        this.clickRandomMonth();
        this.clickRandomDay();
    }

    clickRandomYear() {
        DatePickerPage.getYear.then(elm => {
            //cy.log(elm.length);
            let randomYear = Math.floor(Math.random() * elm.length);
            if(randomYear == 0) {
                randomYear++
            }
            this.clickYearByIndex(randomYear);
        })
    }
}
export default DataPickerStep;