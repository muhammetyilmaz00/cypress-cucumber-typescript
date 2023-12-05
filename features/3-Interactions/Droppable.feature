@regression @droppable
Feature: Droppable Validation

  Background: Navigate to the Website
    Given I navigate to demoqa website

  Scenario: Verify user can drag and drop
    When I click to "Interactions" category
    And I click to "Droppable" in menu list
    And I drag the box and drop it on the other box
    Then I verify the box has dropped