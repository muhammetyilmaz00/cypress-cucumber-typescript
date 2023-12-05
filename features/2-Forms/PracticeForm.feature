@regression @practiceForm
Feature: Practice Form Validation in Forms Page

  Background: Navigate to the Website
    Given I navigate to demoqa website

  Scenario: Verify user can submit the form
    When I click to "Forms" category
    And I click to "Practice Form" in menu list
    And I fill out the form with the parameters
      | name       | lastName | email         | gender | mobileNumber | dateOfBirth | subjects              | hobbies | currentAddress | state | city  |
      | Gerimedica | BV       | test@test.com | Male   |   0123456789 | 15 Jan 1990 | Playwright Assignment | Reading | Netherlands    | NCR   | Delhi |
    And I click to Submit button
    Then I see the form result details as expected
      | name       | lastName | email         | gender | mobileNumber | dateOfBirth | subjects              | hobbies | currentAddress | state | city  |
      | Gerimedica | BV       | test@test.com | Male   |   0123456789 | 15 Jan 1990 | Playwright Assignment | Reading | Netherlands    | NCR   | Delhi |
