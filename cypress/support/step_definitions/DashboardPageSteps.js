import { And, Given, When } from "cypress-cucumber-preprocessor/steps";
import { DashboardPage } from "../../pages/DashboardPage";

const dashboardPage = new DashboardPage()

And("I navigate to Poster page", () => {
    dashboardPage.navigateToPosterPage()
})


Then("I am on the Dashboard page", () => {
    dashboardPage.verifyOnDashboardPage()
});


And("I navigate to the Customer page", () => {
    dashboardPage.navigateToCustomerPage()
})


And("I click the Create button on the Customer page", () => {
    dashboardPage.clickCreate()
})


And("I input new customer information", () => {
    cy.fixture('customerdata').then((data) => {

        
        dashboardPage.enterFirstName(data.firstname)
        dashboardPage.enterLastName(data.lastname)
        dashboardPage.enterEmail(data.email)
        dashboardPage.selectBirthday(data.birthday)

        dashboardPage.enterAddress(data.address)
        dashboardPage.enterCity(data.city)
        dashboardPage.enterState(data.state)
        dashboardPage.enterZipcode(data.zipcode)
        dashboardPage.enterPassword(data.password)
        dashboardPage.enterConfirmPassword(data.password)

        dashboardPage.clickSave()


        
    })
})


And("I see new customer is created", () => {
    cy.fixture('customerdata').then((data) => {
        dashboardPage.verifyTheFirstCustomer(data.firstname + ' ' + data.lastname)
    })

})
