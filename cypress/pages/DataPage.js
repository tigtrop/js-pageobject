import { table1, table2 } from "../test-data/tableData";

class DataPage {
    static visit() {
        cy.visit('http://www.webdriveruniversity.com/Data-Table');
    }

    static getTableWithID(value) {
        return cy.xpath(`//table[@id='${value}']`);
    }

    static getFirstNameColumnIDTable(id, row) {
        return this.getTableWithID(id).find(`tr:nth-of-type(${row+1}) td:nth-of-type(1)`);
    }

    

    static getTable(value) {
        if(value=='t01'){
            return table1;
        }else if(value=='t02'){
            return table2;
        }
    }

    static getTable1() {
        return cy.get('[id] table:nth-of-type(1)');
    }

    static getTable2() {
        return cy.get('[id] table:nth-of-type(3)');
    }

    static getTable3() {
        return cy.get('.traversal-table');
    }

    static getLastNameColumn(id, row){
        return this.getTableWithID(id).find(`tr:nth-of-type(${row+1}) td:nth-of-type(2)`);
    }

    static getAgeColumn(id, row){
        return this.getTableWithID(id).find(`tr:nth-of-type(${row+1}) td:nth-of-type(3)`);
    }

    static getTestColumn(table, row){
        return table.find(`tr:nth-of-type(${row+2}) td:nth-of-type(${row+1})`);
    }

    // static getTableColumnsNames1() {
    //     return this.getTable3().find('tr:nth-of-type(1) > th');
    // }

    static get getTableWithOutID() {

    }

    static get getForm() {
        return cy.get('#form-textfield');
    }

    static get getFirstNameField() {
        return cy.get('#form-textfield ').find('[name=firstname]');
    }

    static get getLastNameField() {
        return this.getForm.find('[name=lastname]');
    }

    static get getTextField() {
        return this.getForm.find('textarea');
    }

    static get getBreadcrumbs() {
        return cy.get('ol.breadcrumb > li');
    }

    static get getBreadcrumbsHome() {
        return this.getBreadcrumbs.eq(0);
    }

    static get getBreadcrumbsAboutUs() {
        return this.getBreadcrumbs.eq(1);
    }

    static get getBreadcrumbsContactUs() {
        return this.getBreadcrumbs.eq(2);
    }

    static getBadgeTitle(order) {
        return cy.get(`.list-group > li:nth-of-type(${order+1})`);
    }

    static getBadgeValue(order) {
        return cy.get(`.list-group > li:nth-of-type(${order+1}) > span`);
    }

    static getPageButton(value){
        return cy.get(`li:nth-of-type(${value+1}) > .page-link`);
    }
////////////////////////////////// test
    static getFirstNameColumnUniversal(id, row) {
        return this.getTableWithID(id).find(`tr:nth-of-type(${row+1}) td:nth-of-type(${row})`);
    }

    static getTableColumnsNames(selectorTable) {
        return selectorTable.find('tr:nth-of-type(1) > th');
    }

    static getTestColumnUniversal(tableIndex, columnIndex, rowIndex){
        return cy.xpath(`(//table)[${tableIndex}]//tr[${rowIndex}]/th[${columnIndex}]`)
    }

    static data1() {
        return table1;
    }
}
export default DataPage;