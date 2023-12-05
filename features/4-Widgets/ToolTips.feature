@regression @toolTips
Feature: Tool Tips Validation

  Background: Navigate to the Website
    Given I navigate to demoqa website

  Scenario: Verify the tooltip
    When I click to "Widgets" category
    And I click to "Tool Tips" in menu list
    And I hover over the button "Hover me to see"
    Then I see the message next to the button
