
export class DashboardPage {

    poster_href='[href="#/products"]'
    customer_href = '[href="#/customers"]'   



    /**
     * Navigate to Poster page
     */
    navigateToPosterPage() {
        cy.get(this.poster_href).click()        
    }


    /**
     * Navigate to the Customer page
     */
    navigateToCustomerPage() {
        cy.get(this.customer_href).click()       
    }    



    /**
     * Verify the Dashboard is loaded successfully
     */
    verifyOnDashboardPage() {
        cy.contains('Dashboard').should('be.visible')
    }
    
}