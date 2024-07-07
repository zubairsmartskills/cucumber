package org.stepdefinition;

import org.junit.Assert;
import org.pojo.classes.LoginPOJO;
import org.reusable.UtilityClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Scenario2 extends UtilityClass{
	
	LoginPOJO l;

	@When("User has to pass valid phone number {string} and invalid password {string} to required field")
	public void user_has_to_pass_valid_phone_number_and_invalid_password_to_required_field(String validPhNo, String invalidPassword) {
	    
		l = new LoginPOJO();
		passTextToTextBox(l.getEmailTxt(), validPhNo);
		passTextToTextBox(l.getPassewordTxt(), invalidPassword);
		Assert.assertTrue(false); 
	}

	@When("User has to click the login button")
	public void user_has_to_click_the_login_button() {
	 
		clickWebElement(l.getLoginBtn());
	}

	@Then("User should see the error message {string}")
	public void user_should_see_the_error_message(String errorMessage) {
	    
//		Assert.assertTrue("User couldn't see error message", l.getErrorPage().getText().contains(errorMessage)); 
	}

}
