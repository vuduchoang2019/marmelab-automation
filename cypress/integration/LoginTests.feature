Feature: Login Tests

    Login Tests

    Scenario: Login with incorrect account
        Given I navigate to the login page
        When I login with correct account
        Then I am on the Dashboard page
