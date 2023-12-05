@regression @brokenImages
Feature: Broken Link-Images Validation in Elements Page

  Background: Navigate to the Website
    Given I navigate to demoqa website

  Scenario: Verify broken image
    When I click to "Elements" category
    And I click to "Broken Links - Images" in menu list
    Then I verify the broken image