import { And, Then } from "cypress-cucumber-preprocessor/steps";
import {PosterPage} from "../../pages/PosterPage"


const posterPage = new PosterPage()

And("I search poster with name {string}", (postname) => {
    posterPage.enterSearchText(postname)
})



Then("I got the first poster with name {string}", (postname) => {
    posterPage.verifyTheFirstPosterWithName(postname)
})