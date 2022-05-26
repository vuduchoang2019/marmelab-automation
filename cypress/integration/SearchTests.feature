Feature: Search Poster Tests

    Search Poster Tests

    Scenario Outline: Search poster by name
        Given I navigate to the login page
        When I login with correct account
        Then I am on the Dashboard page
        And I navigate to Poster page
        And I search poster with name <postname>
        Then I got the first poster with name <postname>

        Examples:
            | postname       |
            | "Alone Jogger" |
            | "Apricot Tree" |

