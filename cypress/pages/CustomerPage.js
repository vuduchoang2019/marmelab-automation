
export class CustomerPage {


    cusomter_create_btn = 'a.MuiButton-root'
    customer_save_btn = '.RaToolbar-defaultToolbar > .MuiButton-root'

    // Customer info
    firstname_txt = '#first_name'
    lastname_txt = '#last_name'
    email_txt = '#email'
    birthday_calendar = '#birthday'
    address_txt = '#address'
    city_txt = '#city'
    state_txt = '#stateAbbr'
    zipcode_txt = '#zipcode'
    password_txt = '#password'
    confirm_password_txt = '#confirm_password'

    // Cusomter element
    customer_id = '.column-customer_id'


    /**
     * Click Create Customer button
     */
     clickCreate() {
        cy.get(this.cusomter_create_btn).click()
    }


    /**
     * Click Save Customer
     */
    clickSave() {
        cy.get(this.customer_save_btn).click()
    }


    /**
     * Enter First Name
     * @param {*} firstname 
     */
    enterFirstName(firstname) {
        cy.get(this.firstname_txt).type(firstname)

    }


    /**
     * Enter Last Name
     * @param {*} lastname 
     */
    enterLastName(lastname) {
        cy.get(this.lastname_txt).type(lastname)        
    }


    /**
     * Enter Email
     * @param {*} email 
     */
    enterEmail(email) {
        cy.get(this.email_txt).type(email)
    }


    /**
     * Select Birthday
     * @param {*} birthday 
     */
    selectBirthday(birthday) {
        cy.get(this.birthday_calendar).type(birthday)
    }


    /**
     * Enter Address
     * @param {*} address 
     */
    enterAddress(address) {
        cy.get(this.address_txt).type(address)
    }


    /**
     * Enter City
     * @param {*} city 
     */
    enterCity(city) {
        cy.get(this.city_txt).type(city)
    }


    /**
     * Enter State
     * @param {*} state 
     */
    enterState(state) {
        cy.get(this.state_txt).type(state)
    }


    /**
     * Enter Zipcode
     * @param {*} zipcode 
     */
    enterZipcode(zipcode) {
        cy.get(this.zipcode_txt).type(zipcode)
    }


    /**
     * Enter Password
     * @param {*} password 
     */
    enterPassword(password) {
        cy.get(this.password_txt).type(password)
    }


    /**
     * Enter Confirm Password
     * @param {*} password 
     */
    enterConfirmPassword(password) {
        cy.get(this.confirm_password_txt).type(password)
    }


    /**
     * Verify the first customer with name
     * @param {*} name 
     */
    verifyTheFirstCustomer(name) {
        cy.wait(2000)
        cy.get(this.customer_id).eq(1).should('have.text', name)
    }


}