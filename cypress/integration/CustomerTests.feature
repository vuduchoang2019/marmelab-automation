Feature:    Customer Tests
    Customer Tests

    Scenario:   Add a new customer
        Given I navigate to the login page
        When I login with correct account
        Then I am on the Dashboard page
        And I navigate to the Customer page
        And I click the Create button on the Customer page
        And I input new customer information
        Then I navigate to the Customer page
        And I see new customer is created
