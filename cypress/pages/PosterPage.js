

export class PosterPage {

    poster_search = '#q'


    /**
     * Enter postname to search
     * @param {*} txt 
     */
     enterSearchText(txt) {
        cy.get(this.poster_search).type(txt + '{enter}')
    }




    /**
     * Verify the first poster with name
     * @param {*} postname 
     */
     verifyTheFirstPosterWithName(postname) {
        cy.wait(2000)
        cy.get('.MuiImageListItemBar-title').first().should('have.text', postname)
    }
}