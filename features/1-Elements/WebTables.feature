@regression @webTables
Feature: Web Tables Validation in Elements Page

  Background: Navigate to the Website
    Given I navigate to demoqa website

  Scenario: Verify user can enter new data into the table
    When I click to "Elements" category
    And I click to "Web Tables" in menu list
    And I click to Add button on the Web Tables page
    And I fill out the registration from
      | FirstName | LastName | Age | Email         | Salary | Department |
      | Alden     | Cantrell |  30 | test@test.com |  12345 | QA         |
    And I click to Submit button
    Then I verify the form for the expected parameters
      | FirstName | LastName | Age | Email         | Salary | Department |
      | Alden     | Cantrell |  30 | test@test.com |  12345 | QA         |

  Scenario: Verify user can edit the row in a table
    When I click to "Elements" category
    And I click to "Web Tables" in menu list
    And I save the details of second row record
    And I click on the second row edit record button on the Web Tables page
    And I edit the record with the parameters
      | FirstName  | LastName |
      | Gerimedica | BV       |
    And I click to Submit button
    Then I check the first name and last name as expected parameters
      | FirstName  | LastName |
      | Gerimedica | BV       |
    And I check that the stored details of the second record have not changed
