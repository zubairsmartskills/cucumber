
@Feature2
Feature: To validate that user can create account in facebook application

	@Sanity
  Scenario: To create account in fb application    
    
    # One dimentional map datas
    When To pass name data to required field
      | email        | validemail@example.com |
      | phone number |             9092737724 |
      
      
    # Two dimentional map datas
    And To pass password to required field
      | passwordset1 | passwordset2 |
      | Java@123     | Selenium@123 |
      |     45678765 | Cucumber@123 |
      
      
