import { And, Given, When } from "cypress-cucumber-preprocessor/steps";
import { CustomerPage } from "../../pages/CustomerPage";

const customerPage = new CustomerPage()


And("I click the Create button on the Customer page", () => {
    customerPage.clickCreate()
})


And("I input new customer information", () => {
    cy.fixture('customerdata').then((data) => {

        
        customerPage.enterFirstName(data.firstname)
        customerPage.enterLastName(data.lastname)
        customerPage.enterEmail(data.email)
        customerPage.selectBirthday(data.birthday)

        customerPage.enterAddress(data.address)
        customerPage.enterCity(data.city)
        customerPage.enterState(data.state)
        customerPage.enterZipcode(data.zipcode)
        customerPage.enterPassword(data.password)
        customerPage.enterConfirmPassword(data.password)

        customerPage.clickSave()


        
    })
})


And("I see new customer is created", () => {
    cy.fixture('customerdata').then((data) => {
        customerPage.verifyTheFirstCustomer(data.firstname + ' ' + data.lastname)
    })

})
