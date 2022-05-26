import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../../pages/LoginPage"

const loginPage = new LoginPage()

Given("I navigate to the login page", () => {
    loginPage.navigate("https://marmelab.com/react-admin-demo/#/login")
});


When("I login with correct account", () => {
    cy.fixture('testdata').then((data) => {
        loginPage.enterUserName(data.username)
        loginPage.enterPassword(data.password)
        loginPage.clickSignIn()
    })
    
});

