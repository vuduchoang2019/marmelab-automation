

export class LoginPage {

    username_txt = '#username'
    password_txt = '#password'
    signin_btn = '.MuiButton-root'

    /**
     * Navigate to url
     * @param {*} url 
     */
    navigate(url) {
        cy.visit(url)        
    }


    /**
     * Enter username
     * @param {*} username 
     */
    enterUserName(username) {
        cy.get(this.username_txt).type(username)        
    }


    /**
     * Enter password
     * @param {*} password 
     */
    enterPassword(password) {
        cy.get(this.password_txt).type(password)
    }


    /**
     * Click Sign In
     */
    clickSignIn() {
        cy.get(this.signin_btn).click()        
    }




}