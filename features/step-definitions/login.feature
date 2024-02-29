@digital-skola @login
Feature: Swag Labs - Login
  Background: User on the login page
    Given Meilani is on the login page

  @positive
  Scenario: As a standard_user, I want to log in successfully
    When Meilani login with "standard_user" credential
    Then Meilani should see home page

  @negative
  Scenario: As a locked_out_user, I should get error message
    When Meilani login with "locked_out_user" credential
    Then Meilani should see error "Epic sadface: Sorry, this user has been locked out."

  @positive
  Scenario: As a problem_user, I should successfully login
    When Meilani login with "problem_user" credential
    Then Meilani should see home page

  @negative
  Scenario: As a invalid_user, I should get error message
    When Meilani login with "invalid password" credential
    Then Meilani should see error "Epic sadface: Username and password do not match any user in this service"


