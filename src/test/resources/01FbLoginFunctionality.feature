@Feature1
Feature: To validate login feature in fb application

	@Smoke
  Scenario: To validate login with invalid email and invalid password
    When User has to pass invalid email and invalid password to required field
    And User has to click login button
    Then To validate that user has navigate to error page

	@Sanity @Smoke @Scenario2
  Scenario: To validate login with valid mobile number and invalid password
    When User has to pass valid phone number "9787979697" and invalid password "Sink@123" to required field
    And User has to click the login button
    Then User should see the error message "The password that you've entered is incorrect."

	@Regression
  Scenario Outline: To validate login with empty fields
    When To pass test datas to email "<emaildata>" and password "<passworddata>" field
    And To click login button 
    Then To verify i should see an error message

    Examples: 
      | emaildata              | passworddata      |
      |                        |                   |
      | validemail@example.com |                   |
      |                        | validpassword@123 |
      
      
