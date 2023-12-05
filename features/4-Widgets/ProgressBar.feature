@regression @progressBar
Feature: Progress Bar Validation

  Background: Navigate to the Website
    Given I navigate to demoqa website

  Scenario: Verify the progress bar
    When I click to "Widgets" category
    And I click to "Progress Bar" in menu list
    And I verify the progress is 0%
    And I click to Start button on Progress Bar page
    And I wait until Reset button appairs
    Then I verify the progress is 100%
