package org.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.pojo.classes.LoginPOJO;
import org.reusable.UtilityClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginFeature extends UtilityClass {
	
	LoginPOJO l;
	
	String expected = "The email address you entered isn't connected to an account. Find your account and log in.";
	

	@When("User has to pass invalid email and invalid password to required field")
	public void user_has_to_pass_invalid_email_and_invalid_password_to_required_field() {
	    
		l = new LoginPOJO();
		passTextToTextBox(l.getEmailTxt(), "sinkaravel.it@gmail.com");
		passTextToTextBox(l.getPassewordTxt(), "3457543");
	}

	@When("User has to click login button")
	public void user_has_to_click_login_button() {
	    
		clickWebElement(l.getLoginBtn());		
	}

	@Then("To validate that user has navigate to error page")
	public void to_validate_that_user_has_navigate_to_error_page() {
	    
		System.out.println(l.getErrorPage().getText());
//		Assert.assertTrue("User not presented in error page", l.getErrorPage().getText().equals(expected));
	}

	
}
